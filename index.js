const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('YOUR_API_TOKEN_HERE');

bot.onText(/\/channels (.+)/, (msg, match) => {
  const userId = match[1];
  bot.getChatMember(userId, '@channelusername').then((chatMember) => {
    const channels = chatMember.channels.map((channel) => {
      return `${channel.title} (@${channel.username})`;
    });
    bot.sendMessage(msg.chat.id, `Channels for user ${userId}:\n\n${channels.join('\n')}`);
  });
});

bot.onText(/\/groups (.+)/, (msg, match) => {
  const userId = match[1];
  bot.getChatMember(userId, '@groupusername').then((chatMember) => {
    const groups = chatMember.groups.map((group) => {
      return `${group.title} (@${group.username})`;
    });
    bot.sendMessage(msg.chat.id, `Groups for user ${userId}:\n\n${groups.join('\n')}`);
  });
});

