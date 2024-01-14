console.log(':)')
const keep_alive = require('./keep_alive.js')

// STEAM FARMANJE SATI
const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
var username = 'ilioskifi';
var password = process.env.steampass;
var shared_secret = process.env.steamsecret;
var games = [730];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible
user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
  if (user.steamID != null) console.log(user.steamID + ' - steam logiran');
  user.setPersona(status);               
  user.gamesPlayed(games);
});

// DISCORD CELO VREME DND
const Eris = require("eris");
const bot = new Eris(process.env.discbot);
bot.on("error", (err) => {
  console.error(err); 
});
bot.connect(); 
console.log('335048615603208193 - diskord logiran');

// DISCORD CELO VREME DND STARIO ACC
const Erikson = require("eris");
const botce = new Erikson(process.env.discbotce);
botce.on("error", (err) => {
  console.error(err); 
});
botce.connect(); 
console.log('951184062331109426 - diskord vtor logiran');
