const TelegramBot = require ('node-telegram-bot-api');

const token = '5674780645:AAGcU1mgTQ_Ean_MgGL4wbKA4kCjGP0932g';

const bot = new TelegramBot (token, {polling: true});

const arrMessageBot = ['Ты натури дурачок', 'Ща чапалах дам', 'Любого размажу'];

const roundMatch = (max, min) => {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

bot.on('message', msg => {
	const {id: id, first_name: userName} = msg.chat;

	if(/Привет/gi.test(msg.text)) {
		bot.sendMessage(id, `${arrMessageBot[roundMatch(2, 0)]} ${userName}`);
	}
});