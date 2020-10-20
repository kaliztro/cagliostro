const db = require("quick.db")
const discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
  name: "dstatus",
  description: "Altera o status do bot.",
  usage: "dstatus <aqui>",
  category: "owner",
  run: async (client, message, args) => {
    
    if(message.author.id != config.donoID) {
      return message.channel.send("Esse comando é especifico para o meu criador.")
    }
    
    if(!args.length) {
      return message.channel.send("Digite o novo status.")
    }
    const status = args.join(" ")
    
 db.set(`status_`, status)
   await message.channel.send(`Status atualizado para: ${status}`)
    
    
  }
}