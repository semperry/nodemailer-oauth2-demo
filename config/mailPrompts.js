const contactMailOptions = (req) => {
	return {
		from: req.body.email,
		to: process.env.USER_EMAIL,
		subject: "Ecommerce Store Contact Form Request",
		html: `<p>You have a message from the contact form:</p><p>${req.body.message}</P><h1>COOL STUFF</h1>`,
	};
};

const sendMailOptions = {
	from: "Your contact form",
	to: process.env.USER_EMAIL,
	subject: "Standard Email Prompt",
	text: `You have a message from the contact form:\n\n
	Way to go setting this thing up`,
};

module.exports = {
	contactMailOptions,
	sendMailOptions,
};
