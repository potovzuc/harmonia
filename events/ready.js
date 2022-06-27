const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix

module.exports = client => {
  console.log(`Komutlar Hazır!`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
    var oyun = [
        "abone olmayı unutmayın",
        "",
        "",
        "",
        
    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], );
        }, 2 * 9000);
  
};