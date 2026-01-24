const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SHOAIB", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞   👤 SHOAIB"সোয়াইব
📍 Mymensingh, Bangladesh
📞 [ inbox ]
📧 [inbox ]
• 📅 Date of Birth: [20/1/2007]🌈
• 🇧🇩 Nationality: Bangladeshi🥀
• 💍 Marital Status: Ultra jonmogoto Single😅
• 🏠 Home Town: Mymensingh
🔗 [https://www.facebook.com/share/1AZD9mMW33/?mibextid=wwXIfr] 
🛠 SKILLS
• 💻 Computer: Basic MS Office (Word, Excel), Internet Research.
• 🗣️ Languages: Bengali (Native), English (Conversational).
• 🤝 Soft Skills: Teamwork, Time Management, Quick Problem Solving.
🎨 INTERESTS & HOBBIES
• 📖 Reading Tech Blogs
• ⚽ Playing Football / Cricket
• ✈️ Traveling & Exploring New Places
✨ FINAL WORD ✨
"I believe in honesty and hard work. Everything I do, I do with all my heart!" ❤️
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100000478146113/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
