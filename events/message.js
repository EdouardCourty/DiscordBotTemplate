const utils = require("../data/utils");

module.exports = (client, message) => {
  // Listening condition
  message.isCommand  = message.content.startsWith(process.env.COMMAND_PREFIX) ? 1 : 0;

  if (message.author.bot && !message.isCommand) return;

  message.args        = message.content.split(" ");
  message.fullArgs    = message.args;
  message.commandName = message.isCommand ? message.args.shift().slice(1).toLowerCase() : undefined;
  message.baseContent = message.isCommand ? message.content : undefined;
  message.content     = message.isCommand ? message.args.join(" ") : message.content;

  if (message.isCommand) utils.runCommand(client, message);
  utils.log(message);
};