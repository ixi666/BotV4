let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//    pp = await conn.getProfilePicture(who)
} catch (e) {
} finally {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let str = `
*_π Hola ${username} π_*

*<MENU DE AUDIOS/>*
- Escribe las palabras/frases tal como estan, no hace falta poner ningun prefijo (#, ., *, etc) 

Β° β¬π _Quien es tu sempai botsito 7w7_
Β° β¬π  _Te diagnostico con gay_
Β° β¬π  _A nadie le importa_
Β° β¬π  _Fiesta del admin_
Β° β¬π  _Fiesta del admin 2_
Β° β¬π  _Vivan los novios_
Β° β¬π  _Feliz cumpleaΓ±os_
Β° β¬π  _Noche de paz_
Β° β¬π  _Buenos dias_
Β° β¬π  _Audio hentai_
Β° β¬π  _Chica lgante_
Β° β¬π  _Feliz navidad_
Β° β¬π  _Vete a la vrg_
Β° β¬π  _Pasa pack Bot_
Β° β¬π  _Atencion grupo_
Β° β¬π  _Marica quien_
Β° β¬π  _Murio el grupo_
Β° β¬π  _Oh me vengo_
Β° β¬π  _Viernes_
Β° β¬π  _Baneado_
Β° β¬π  _Sexo_
Β° β¬π  _Hola_
Β° β¬π  _Un pato_
Β° β¬π  _Nyanpasu_
Β° β¬π  _Te amo_
Β° β¬π  _Yamete_
Β° β¬π  _BaΓ±ate_
Β° β¬π  _Es puto_
Β° β¬π  _La biblia_
Β° β¬π  _Onichan_
Β° β¬π  _Bot puto_
Β° β¬π  _AgromosBot_
Β° β¬π  _Siuuu_
Β° β¬π  _Rawr_
Β° β¬π  _UwU_
Β° β¬π  _:c_
Β° β¬π  _a_
Β° β¬π  _ara ara_
Β° β¬π  _te quiero bot_

βLOS  SIGUIENTE  COMANDOS SON NUEVOS REPORTAR POR SI ALGUNO NO SIRVE EN #report
Β° β¬π  _Bien pesando woody_
Β° β¬π  _Fino seΓ±ores_
Β° β¬π  _Entrada Γ©pica_
Β° β¬π  _Me pica los cocos_
Β° β¬π  _verdad que te engaΓ±e_
Β° β¬π  _Yoshi_
Β° β¬π  _No digas eso papu_
Β° β¬π  _Masivo_
Β° β¬π  _Sus_
Β° β¬π  _La voz de hombre_
Β° β¬π  _Jesucristo_
Β° β¬π  _Una pregunta_
Β° β¬π  _Pikachu_
Β° β¬π  _Yokese_
Β° β¬π  _pero esto_
Β° β¬π  _Basado_
Β° β¬π  _Tengo los calzones del admin_
Β° β¬π  _Estoy triste_
Β° β¬π  _Audio Hentai_
Β° β¬π  _Navidad_
Β° β¬π  _Cagaste_
Β° β¬π  _Niconico
Β° β¬π _Wtf_
Β° β¬π _Contexto_
Β° β¬π _OMG_
Β° β¬π _Me voy_
Β° β¬π _No digas mamadas meriyen
Β° β¬π _Me los voy a coger_
Β° β¬π _Eres gay bot_
Β° β¬π _No chupala_
Β° β¬π _Pasen un pornito_
Β° β¬π _QuΓ­tate la ropa peter_
Β° β¬π _Homero chino_
Β° β¬π _Valla fan de bts_
Β° β¬π _Joder se estan riendo de mi_
Β° β¬π _Desamor_
Β° β¬π _Mi compa el manco_
Β° β¬π _Ya basta jovenes_
Β° β¬π _Deja de llorar maldita puta_
*_γ πAΜΆGΜΆRΜΆOΜΆMΜΆOΜΆSΜΆ SΜΆPΜΆ-ΜΆBΜΆOΜΆTΜΆπ  γ_*`.trim()
let mentionedJid = [who]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}}
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
module.exports = handler
