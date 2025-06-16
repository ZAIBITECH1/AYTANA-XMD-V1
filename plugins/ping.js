const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    alias: ["speed","pong"],use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🍁",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '⏰', '💨', '🎯', '🎉', '👿', '💥', '🕐', '🤖'];
        const textEmojis = ['⏰', '🏆', '🛸', '🚀', '🎶', '🪀', '💞', '🔱', '🛡️', '❣️'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        const text = `╭━━━━⪻•𝐏𝐈𝐍𝐆 𝐓𝐄𝐒𝐓•⪼━━━━╮
┃📡𝐁𝐎𝐓: *𝗔𝗬𝗧𝗔𝗡𝗔-𝗫𝗠𝗗-𝗩𝟭*
┃🌟𝐏𝐈𝐍𝐆: *${responseTime.toFixed(2)}MS ${reactionEmoji}*
╰━━━━━━⦉𝗔𝗬𝗧𝗔𝗡𝗔⦊━━━━━━╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗔𝗬𝗧𝗔𝗡𝗔-𝗫𝗠𝗗-𝗩𝟭* 💙`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398101781980@newsletter',
                    newsletterName: "𝗔𝗬𝗧𝗔𝗡𝗔-𝗫𝗠𝗗-𝗩𝟭",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 

cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "📡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*PINGING...⏳*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `╭━━〔 *🛸 SPEED2 TEST* 〕━━╮
┃ 🤖 *BOT* : *AYTANA XMD V1*
┃ ⏳ *PING* : *${ping}MS*
╰━━━━━━━━━━━━━━━━━━━━╯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗔𝗬𝗧𝗔𝗡𝗔-𝗫𝗠𝗗-𝗩𝟭* 💙` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
