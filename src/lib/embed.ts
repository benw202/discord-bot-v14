import discord from 'discord.js';
import { Colors } from '../constants';

//export function makeEmbed(embed: discord.EmbedAuthorOptions): discord.EmbedBuilder {
//    return new discord.EmbedBuilder({
//        color: Colors.FBW_CYAN,
//        ...embed,
//    });
//}

export function makeEmbed(embed): discord.EmbedBuilder {
    return new discord.EmbedBuilder({
        color: Colors.FBW_CYAN,
        ...embed,
    });
}

export function makeLines(lines: string[]): string {
    return lines.join('\n');
}
