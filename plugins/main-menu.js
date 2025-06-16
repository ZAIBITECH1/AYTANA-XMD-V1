const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "🇭🇹",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━⪨ *𝗔𝗬𝗧𝗔𝗡𝗔-𝗫𝗠𝗗-𝗩𝟭* ⪩━┈⊷
├❁╭───────────────·๏
├❁┃•  Owner : *${config.OWNER_NAME}*
├❁┃•  Prefix : *➥${config.PREFIX}*
├❁┃•  Platform : *GITHUB*
├❁┃•  Version : *1.0.0*
├❁┃•  Mode : *${config.MODE}*
├❁┃•  command : *𝟹𝟶𝟶*
├❁┃•  Runtime : *${runtime(process.uptime())}*
├❁╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

🌸*WELCOME TO AYTANA XMD V1*🩸
-------------------------------------------------

╭━⪨👥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  grouplink
├❒┃➢  kickall
├❒┃➢  kickall2
├❒┃➢  kickall3
├❒┃➢  add
├❒┃➢  remove
├❒┃➢  kick
├❒┃➢  promote
├❒┃➢  demote
├❒┃➢  dismiss
├❒┃➢  revoke
├❒┃➢  setgoodbye
├❒┃➢  setwelcome
├❒┃➢  delete
├❒┃➢  getpic
├❒┃➢  ginfo
├❒┃➢  disappear on
├❒┃➢  disappear off
├❒┃➢  disappear 7D,24H
├❒┃➢  allreq
├❒┃➢  updategname
├❒┃➢  updategdesc
├❒┃➢  joinrequests
├❒┃➢  senddm
├❒┃➢  nikal
├❒┃➢  mute
├❒┃➢  unmute
├❒┃➢  lockgc
├❒┃➢  unlockgc
├❒┃➢  invite
├❒┃➢  tag
├❒┃➢  hidetag
├❒┃➢  tagall
├❒┃➢  tagadmins
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨📥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭────────────────·๏
├❒┃➢  facebook
├❒┃➢  mediafire
├❒┃➢  tiktok
├❒┃➢  twitter
├❒┃➢  insta
├❒┃➢  apk
├❒┃➢  img
├❒┃➢  tt2
├❒┃➢  pins
├❒┃➢  apk2
├❒┃➢  fb2
├❒┃➢  pinterest
├❒┃➢  spotify
├❒┃➢  play
├❒┃➢  play2
├❒┃➢  audio
├❒┃➢  video
├❒┃➢  video2
├❒┃➢  ytmp3
├❒┃➢  ytmp4
├❒┃➢  song
├❒┃➢  darama
├❒┃➢ gdrive
├❒┃➢  ssweb
├❒┃➢  tiks
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨🎭𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  bully 
├❒┃➢  cuddle 
├❒┃➢  cry 
├❒┃➢  hug
├❒┃➢  awoo 
├❒┃➢  kiss 
├❒┃➢  lick 
├❒┃➢  pat 
├❒┃➢  smug 
├❒┃➢  bonk 
├❒┃➢  yeet 
├❒┃➢  blush 
├❒┃➢  smile 
├❒┃➢  wave 
├❒┃➢  highfive 
├❒┃➢  handhold 
├❒┃➢  nom 
├❒┃➢  bite 
├❒┃➢  glomp 
├❒┃➢  slap 
├❒┃➢  kill 
├❒┃➢  happy 
├❒┃➢  wink 
├❒┃➢  poke 
├❒┃➢  dance 
├❒┃➢  cringe 
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨🎨𝐋𝐎𝐆𝐎 𝐌𝐀𝐊𝐄𝐑 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  neonlight
├❒┃➢  blackpink
├❒┃➢  dragonball
├❒┃➢  3dcomic
├❒┃➢  america
├❒┃➢  naruto
├❒┃➢  sadgirl
├❒┃➢  clouds
├❒┃➢  futuristic
├❒┃➢  3dpaper
├❒┃➢  eraser
├❒┃➢  sunset
├❒┃➢  leaf
├❒┃➢  galaxy
├❒┃➢  sans
├❒┃➢  boom
├❒┃➢  hacker
├❒┃➢  devilwings
├❒┃➢  nigeria
├❒┃➢  bulb
├❒┃➢  angelwing
├❒┃➢  zodiac
├❒┃➢  luxury
├❒┃➢  paint
├❒┃➢  frozen
├❒┃➢  castle
├❒┃➢  tatoo
├❒┃➢  valorant
├❒┃➢  bear
├❒┃➢  typography
├❒┃➢  birthday
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨👑𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  owner
├❒┃➢  menu
├❒┃➢  menu2
├❒┃➢  vv
├❒┃➢  listcmd
├❒┃➢  allmenu
├❒┃➢  repo
├❒┃➢  block
├❒┃➢  unblock
├❒┃➢  fullpp
├❒┃➢  setpp
├❒┃➢  restart
├❒┃➢  shutdown
├❒┃➢  updatecmd
├❒┃➢  alive
├❒┃➢  ping
├❒┃➢  gjid
├❒┃➢  jid
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨🎉𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  shapar
├❒┃➢  rate
├❒┃➢  insult
├❒┃➢  hack
├❒┃➢  ship
├❒┃➢  character
├❒┃➢  pickup
├❒┃➢  joke
├❒┃➢  hrt
├❒┃➢  hpy
├❒┃➢  syd
├❒┃➢  anger
├❒┃➢  shy
├❒┃➢  kiss
├❒┃➢  mon
├❒┃➢  cunfuzed
├❒┃➢  setpp
├❒┃➢  hand
├❒┃➢  nikal
├❒┃➢  hold
├❒┃➢  hug
├❒┃➢  nikal
├❒┃➢  hifi
├❒┃➢  poke
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨💱𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭────────────────·๏
├❒┃➢  sticker
├❒┃➢  sticker2
├❒┃➢  emojimix
├❒┃➢  fancy
├❒┃➢  take
├❒┃➢  tomp3
├❒┃➢  tts
├❒┃➢  trt
├❒┃➢  base64
├❒┃➢  unbase64
├❒┃➢  binary
├❒┃➢  dbinary
├❒┃➢  tinyurl
├❒┃➢  urldecode
├❒┃➢  urlencode
├❒┃➢  url
├❒┃➢  repeat
├❒┃➢  ask
├❒┃➢  readmore
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨🤖𝐀𝐈 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  ai
├❒┃➢  gpt3
├❒┃➢  gpt2
├❒┃➢  gptmini
├❒┃➢  gpt
├❒┃➢  meta
├❒┃➢  blackbox
├❒┃➢  luma
├❒┃➢  dj
├❒┃➢  khan
├❒┃➢  jawad
├❒┃➢  gpt4
├❒┃➢  bing
├❒┃➢  imagine
├❒┃➢  imagine2
├❒┃➢  copilot
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨👻𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  ping
├❒┃➢  ping2
├❒┃➢  speed
├❒┃➢  live
├❒┃➢  alive
├❒┃➢  runtime
├❒┃➢  uptime
├❒┃➢  repo
├❒┃➢  owner
├❒┃➢  menu
├❒┃➢  menu2
├❒┃➢  restart
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨🎎𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  fack
├❒┃➢  truth
├❒┃➢  dare
├❒┃➢  dog
├❒┃➢  awoo
├❒┃➢  garl
├❒┃➢  waifu
├❒┃➢  neko
├❒┃➢  megnumin
├❒┃➢  neko
├❒┃➢  maid
├❒┃➢  loli
├❒┃➢  animegirl
├❒┃➢  animegirl1
├❒┃➢  animegirl2
├❒┃➢  animegirl3
├❒┃➢  animegirl4
├❒┃➢  animegirl5
├❒┃➢  anime1
├❒┃➢  anime2
├❒┃➢  anime3
├❒┃➢  anime4
├❒┃➢  anime5
├❒┃➢  animenews
├❒┃➢  foxgirl
├❒┃➢  naruto
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷

╭━⪨♻️𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 ⪩━┈⊷
├❒╭───────────────·๏
├❒┃➢  timenow
├❒┃➢  date
├❒┃➢  count
├❒┃➢  calculate
├❒┃➢  countx
├❒┃➢  flip
├❒┃➢  coinflip
├❒┃➢  rcolor
├❒┃➢  roll
├❒┃➢  fact
├❒┃➢  cpp
├❒┃➢  rw
├❒┃➢  pair
├❒┃➢  pair2
├❒┃➢  pair3
├❒┃➢  fancy
├❒┃➢  logo <text>
├❒┃➢  define
├❒┃➢  news
├❒┃➢  movie
├❒┃➢  weather
├❒┃➢  srepo
├❒┃➢  insult
├❒┃➢  save
├❒┃➢  wikipedia
├❒┃➢  gpass
├❒┃➢  githubstalk
├❒┃➢  yts
├❒┃➢  ytv
├❒╰───────────────┈⊷
╰━━━━━━━━━━━━━━━━━┈⊷
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ DAWENS BOY*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/mz913v.jpeg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363398101781980@newsletter',
                        newsletterName: "⪨𝗔𝗬𝗧𝗔𝗡𝗔-𝗫𝗠𝗗-𝗩𝟭⪩",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/m4zrro.mp4' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
  
