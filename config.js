const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "yj5mGLRB#KGSVu_3T8_2NrrYZ63A1tSwVKev1DGYKZBZX5Oe1CT0",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "true",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M PANHWAR-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ᴀᴡᴀɪs ᴍᴅ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 Adrian`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
