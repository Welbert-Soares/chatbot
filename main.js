const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', message => {
	if (message.body === '!horario') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'O clube está aberto das 6h às 22h.');
	}
});


client.initialize();