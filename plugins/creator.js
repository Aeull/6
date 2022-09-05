let handler = async (m, { conn }) => {
  try {
    const sentMsg = await conn.sendContactArrayS(m.chat, [
      [`${owner[0]}`, `${await conn.getName(owner[0] + '@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 😡`, `arulltes@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg`, `👤 Tidak Dimanja Oleh Harta,Tetapi Dididik Beretika 😏`],
      [`${owner[1]}`, `${await conn.getName(owner[1] + '@s.whatsapp.net')}`, `👑 Developer Bot `, `📵 Don't spam/call me 😡`, `arulltes@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg`, `👤 Hanya seseoarng biasa yang kadang butuh perhatian ☺`],
      [`${owner[2]}`, `${await conn.getName(owner[2] + '@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 😡`, `arulltes@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg`, `👤 Dingin Nih,Panasin Donk 😣`],
      [`${owner[3]}`, `${await conn.getName(owner[3] + '@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 😡`, `arulltes@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg`, `👤 Dingin Nih,Panasin Donk  😣`]
    ], m)
    await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, { mentions: [m.sender] })
  } catch {
    const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0] + '@s.whatsapp.net')}`, m)
    await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, { mentions: [m.sender] })
  }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler
