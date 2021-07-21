const fs = require('fs');
const Discord = require('discord.js');
const figlet = require("figlet");
const d = new Date();

async function writeNotes(strnote) {
    await fs.appendFileSync('notes.txt', "\n" + strnote.toString().slice(6) + "\n");
};

function readNotes() {
    const dataN = fs.readFileSync('notes.txt',
        { encoding: 'utf8', flag: 'r' });
    return dataN;
};

const client = new Discord.Client();
let count = 0;

client.on('ready', () => {
    figlet.text("Maluco Beleza", function (err, data) {
        console.log(data);
        console.log(`---> ON ${client.user.tag} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
		console.log("---> https://github.com/mytteus/Maluco-Beleza");
    });

});

client.on('message', msg => {
    if (msg.content.startsWith('/write')) {
        writeNotes(msg);
        msg.reply("---> Message saved.");
        console.log(`---> Message saved. ${count}`);
        count++;
    };

    if (msg.content.startsWith('/read')) {
        msg.reply(readNotes());
        console.log(`---> Message read.`);
    };

});

// YOUR TOKEN BOT
client.login('');

