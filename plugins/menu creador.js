//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './bienvenido-menu-creador.mp3'
let menu =`
โญโใ ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐โก๏ธ๐ ใโโฎ
 โ    โก _*AGROMOS BOT SP_* โก
 โ ๐*ยก๐ola! ${username}* ๐
 โ
 โ โ๏ธ *_MENร CREADOR_* โ๏ธ
 โโโโโโโโโโโโโโโ
โ *<GESTION DEL CREADOR/>* 
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โ *<PROPIETARO DEL BOT/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ โฑ๐ _${usedPrefix}boost_
โฃ โฑ๐ _${usedPrefix}restart_
โฃ โฑ๐ _${usedPrefix}banlist_
โฃ โฑ๐ _${usedPrefix}binario1_
โฃ โฑ๐ _${usedPrefix}binario2_
โฃ โฑ๐ _${usedPrefix}banchat2_
โฃ โฑ๐ _${usedPrefix}actualizar_
โฃ โฑ๐ _${usedPrefix}CajaFuerte_
โฃ โฑ๐ _${usedPrefix}unbanchat2_
โฃ โฑ๐ _${usedPrefix}bc *texto*_
โฃ โฑ๐ _${usedPrefix}bcgc *texto*_
โฃ โฑ๐ _${usedPrefix}bcbot *texto*_
โฃ โฑ๐ _${usedPrefix}setbye *@tag*_
โฃ โฑ๐ _${usedPrefix}banuser *@tag*_
โฃ โฑ๐ _${usedPrefix}enable *public*_
โฃ โฑ๐ _${usedPrefix}disable *public*_
โฃ โฑ๐ _${usedPrefix}unbanuser *@tag*_
โฃ โฑ๐ _${usedPrefix}listgroup *@tag*_
โฃ โฑ๐ _${usedPrefix}enable *restrict*_
โฃ โฑ๐ _${usedPrefix}enable *autoread*_
โฃ โฑ๐ _${usedPrefix}setwelcome *@tag*_
โฃ โฑ๐ _${usedPrefix}enable *autoread*_
โฃ โฑ๐ _${usedPrefix}disable *autoread*_
โโโโโโโโโโโโโโโ
โใ ๐โก๐โก๐โก๐โก๐ โ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '๐ด๐บ๐๐๐๐๐ ๐๐-๐ต๐๐', '๐ผ๐ด๐ฝ๐ ๐๐ธ๐ผ๐ฟ๐ป๐ด', `#menusimple`, '๐ผ๐ด๐ฝ๐ ๐ฐ๐๐ณ๐ธ๐พ๐', `#menuaudios`, '๐ถ๐๐๐ฟ๐พ ๐พ๐ต๐ธ๐ฒ๐ธ๐ฐ๐ป', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'bienvenido-menu-creador', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menucreador)$/i
handler.fail = null
module.exports = handler
