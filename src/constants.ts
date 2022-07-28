export const GuildID = '738864299392630914';

export enum Colors {
    FBW_CYAN = 57598,
}

export enum CommandCategory {
    A32NX = 'A32NX',
    SUPPORT = 'Support',
    GENERAL = 'General',
    UTILS = 'Utilities',
    FUNNIES = 'Funnies',
    MODERATION = 'Moderation',
}

export enum Channels {
    MOD_LOGS = '783996780181585921',
    USER_LOGS = '779944761699729418',
    SCAM_LOGS = '932687046315737149',
    COUNT_THREAD = '877049017102659654',
    BOT_COMMANDS = '902990139670814750',
    BIRTHDAY_CHANNEL = '846470774361161808',
    BIRTHDAY_THREAD = '930923893206679573',
}

export enum Roles {
    ADMIN_TEAM = '738864824305319936',
    MODERATION_TEAM = '739187150909866137',
    DEVELOPMENT_TEAM = '747571237475057815',
    MEDIA_TEAM = '756972770214281346',
    FBW_EMERITUS = '878635657680027678',
    BOT_DEVELOPER = '768888763929591818',
}

export const UserLogExclude = [
    '628400349979344919', // StickyBot
    '910632773117702185', //FBW Bot
    '856826179491594271', //FBW Staging bot
    '864492608163807302', //BenW test bot
];

export const ModLogsExclude = [
    '910632773117702185', //FBW Bot
    '856826179491594271', //FBW Staging bot
    '864492608163807302', //BenW test bot
];

export enum Units {
    DEGREES = '\u00B0',
    CELSIUS = '\u2103',
    KNOTS = 'kts',
}
