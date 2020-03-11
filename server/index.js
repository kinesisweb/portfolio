const express = require('express');
const developer = express.Router();
const common = require('../../lib/common');
const contact = require('../../lib/email');

developer.use(express.static('portfolio/dist'));

developer.post('/contact', async (req, res) => {
	const fields = await common.parseForm(req, res);

	const auth = {
		user: process.env.PORTFOLIO_EMAIL_USER,
		pass: process.env.PORTFOLIO_EMAIL_PASS
	};
	const message = {
		from: fields.email,
		subject: 'Message from craigriley.uk contact form',
		html: `<table><tr><td>Name: </td><td>${fields.name}</td></tr>
      <tr><td>Email: </td><td>${fields.email}</td></tr>
      <tr><td>${fields.message}</td></tr></table>`
	};

	contact({ auth, message })
		.then((result) => {
			res.status(200).send('Email sent');
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send('Error sending message');
		});
});

module.exports = developer;
