import axios from "axios";
import config from '../../config.js';
import { cmd } from '../command.js';

cmd({
  pattern: "pair",
  alias: ['paircode', 'code'],
  desc: "Get a WhatsApp pairing code for a phone number",
  category: "tools",
  use: "pair <number>",
  filename: __filename,

  execute: async (m, gss) => {
    const prefix = config.PREFIX;
    const args = m.body.trim().split(/\s+/).slice(1);
    const textnumber = args[0];

    if (!textnumber) {
      return m.reply(`❗ Please provide a phone number.\n\nExample:\n*${prefix}pair 50942241547*`);
    }

    try {
      await m.reply("⏳ Fetching pair code...");

      const api = `https://zarya-session-by-dawens-boy-tech.onrender.com/pair?phone=${encodeURIComponent(textnumber)}`;
      const response = await axios.get(api);
      const data = response.data;

      if (!data?.pair_code) {
        return m.reply("❌ Failed to retrieve pair code. Check the phone number and try again.");
      }

      const messagePayload = {
        text: `${data.pair_code}`,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 777,
          externalAdReply: {
            title: data.title || "Pair Device",
            body: data.creator || "Dawens Tech",
            thumbnailUrl: data.thumbnail || "https://telegra.ph/file/7dd9f3c83c5b420d9ebba.jpg",
            sourceUrl: data.channel_link || "https://whatsapp.com/channel/...",
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      };

      await gss.sendMessage(m.from, messagePayload, { quoted: m });

    } catch (err) {
      console.error("Pair Cmd Error:", err.message);
      m.reply("❌ An error occurred:\n```" + err.message + "```");
    }
  }
});
