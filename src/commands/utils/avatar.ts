import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const avatar: CommandDefinition = {
    name: ['avatar', 'av'],
    description: 'Shows the selected user\'s avatar',
    category: CommandCategory.UTILS,
    executor: async (msg) => {
        const split = msg.content.replace(/(?:\.av|\.avatar)\s+/, '').split(' ');
        const userID = msg.guild.members.cache.get(split[0]);
        const user = msg.mentions.users.first() || userID || msg.author;
        user.displayAvatarURL();
        const avatarEmbed = makeEmbed({ image: { url: user.displayAvatarURL({ size: 4096 }) } });
        if (user === msg.mentions.users.first()) {
            avatarEmbed.setTitle(`${user.tag}'s avatar`);
        } else if (user === msg.author) {
            avatarEmbed.setTitle(`${msg.author.tag}'s avatar`);
        } else if (user === userID) {
            avatarEmbed.setTitle(`${userID.user.tag}'s avatar`);
        }
        return msg.channel.send({ embeds: [avatarEmbed] });
    },
};
