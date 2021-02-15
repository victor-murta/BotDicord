const Discord = require('discord.js') //importing the discord file

const bot = new Discord.Client();//creating the bot class

const token = 'NzUwNzI4NzAzODU1ODIwODAw.X0-wlg.TEPbQFcoj2snfAVigoBwbMiTnTk';//password of my bot
bot.login(token)
bot.on('ready',()=> {
    console.log('Estou ON')
})

bot.on('message',(msg) =>{
    if (msg.content === 'Oi'){
        msg.reply("Olá,seja bem vindo ao Murta's server")
    }else if(msg.content === 'Tudo bem' || 'Tudo bem?'){
        msg.reply('Estou bem, e você tudo bem?')
    }
})
//node . :rodar esse comando para que o program se execute