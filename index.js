//you don't have to name it index name what ever you want

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "Obnoxiously Long Token Goes Here";
const prefix = "your prefix goes here"
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

bot.on('ready', () => {
    console.log('Custom console telling bot is on goes here');
    bot.user.setActivity('Custom status goes here', {type: 'LISTENING'}); //you can set the type to 'LISTENING' 'PLAYING' 'WATCHING' 'STREAMING'
                                                                     //if not new to this you'll notice this hasn't changed in the Discord API 
});

bot.on("message", async message => {

    //make these for random of specific thing then specify where it will be used Exmaple line: 89
    let RED = ["Hello I'm an Embed", "Hello World", "You saved Me!"];

    let resultRED = Math.floor((Math.random() * RED.length));

    if(message.author.bot) {
        return; //this keep the bot from read bot messages
    }
    
    if(!message.guild){ //if the command is not sent in a guild(server) but sent in dm's
        message.channel.send("You need to be in guild!"); return //this return is to keep it from running anything else just to be on the safe side!
    }   //^^^then it sends a message //^^^^you can put your own custom message
    let args = message.content.trim().split(" "),
    cmd = message.toString().split(' ');
    if (cmd.toString().split(prefix)[0] !== '') return;

    let command = cmd[0].split(new RegExp(prefix, ''));
    switch(cmd[0].replace(prefix, '')){
        //basic commands
        case 'yo'://case is easier to use than a lot of if commands
            message.channel.send('yo he has the yankee with no brim')
        break;//ends command
        //basic random embed with images
        case 'random':
            if(args[1] === 'image'){//check if the message has the word images then carries out process
                let ime = ["https://i.imgur.com/CE0L7YJ.jpg", "https://i.imgur.com/OEkJ3Pw.jpg", "https://i.imgur.com/OzPXycV.jpg"];

                let resime = Math.floor((Math.random() * ime.length));
                const ThisEmbed = new Discord.MessageEmbed()//ThisEmbed is the name of the Embed your using. You can change the name!
                    .setTitle("I don't know my name:thinking:")
                    .setDescription("Some describe me please!")
                    .addFields(
                        { name: "I'm field 1", value: "I describe my field name", inline: true }//this will be needed or will show in the embed undefined
                    )                                                                          //inline: true makes each field inline with eachother
                    .setImage(ime[resime])//this is basic not the best way but basic, the next command will be the more efficient way
                    .setTimestamp()
                    .setFooter(`requested by ${message.author.tag}`)
                message.channel.send(ThisEmbed);
            }
        break;
        //efficient way of random embed with image
            //first type this in terminal npm i xmlhttprequest
        case 'meme':
        const rmimage = new XMLHttpRequest();
            rmimage.open("GET", `https://www.reddit.com/r/memes/top.json?count=600`, false);
                                //^^^^^^this is the url it will extract a random images from you can use any other site just make sure it has an API
                               //the ?count=600 this is to make sure it doesn't repeat a post //note the top.json is the json reddit has showing the top reddit post of the subreddit            
            rmimage.send(null);
            postm = JSON.parse(rmimage.responseText)//this will parse the link and .json specified from rmimage.open as responseText
            let resultm = Math.floor((Math.random() * postm.data.children.length));//resultm the name of the randomizer of images
            const MEmbed = new Discord.MessageEmbed()
                .setTitle("I'm a good title!")
                .setDescription("I'm a description")
                .addFields(
                    { name: "I'm field 1", value: "I describe my field name"},
                )
                .setColor('#fcdf68')//you can make this a custom color
                .setURL(postss.data.children[resultt].data.url)//this set's the title to the image url
                .setTimestamp()
                .setFooter(`${message.author.tag}`);
                if (postss.data.children[resultt].data.domain === "gfycat.com") {//if the image url come from gfycat.com since gfycat has them as .mp4 it will send the gif of it
                    REmbed.setImage(postss.data.children[resultm].data.media.oembed.thumbnail_url)
                } else {
                    MEmbed.setImage(postm.data.children[resultm].data.url.replace('.gifv', '.gif'))//if the image is a .gifv it will replace it to gif 
                };                                                                                //if its neither it will just sends a normal image
                MEmbed.setTimestamp()
                MEmbed.setFooter(`requested by ${message.author.tag}` `in **${message.guild.name}**`)//tells the person who requested it and what server it was requested
            message.channel.send(MEmbed);                                                           //not server in footer not needed just for looks
                break;
                //random embed description
                case 'Embed':
                    const EEmbed = new Discord.MessageEmbed()
                    .setTitle("I'm a good title!")
                    .setDescription(RED[resultRED])
                    .addFields(
                        { name: "I'm field 1", value: "I describe my field name"},
                    )
                    .setColor('#fcdf68')
                    .setTimestamp()
                    .setFooter(`requested by ${message.author.tag}` `in **${message.guild.name}**`)
                message.channel.send(EEmbed);
                break;
                //command makes the bot say what is requested
                case 'say':
                message.channel.send(`${args.slice(1).join(" ")}`)//send message in guild
                const SEmbed = new Discord.MessageEmbed()//this will tell the requester in dm thats been done and i what server it was done in
                    .setTitle('Info')
                    .addFields(
                        { name: 'Word has been said', value: `in **${message.guild.name}**`}
                    )
                    .setTimestamp()
                    .setColor('#ff0000')
                message.author.send(SEmbed);
                break;
                //slap command
                case 'slap':
                    console.log(message.mentions.members.first().user.id)
                    message.reply(`Has Slapped ${message.mentions.members.first()}`);
                break; 
            }
        }
)
bot.login(token)//grabs the variable token where is defined at the top