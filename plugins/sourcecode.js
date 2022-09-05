let handler = async (m, { conn }) => {
     conn.reply(m.chat, `https://chat.whatsapp.com/ItwCvXL02hg11U5qNaLSBe`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


