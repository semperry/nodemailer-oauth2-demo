require("dotenv").config();
const express = require("express");

const { transport } = require("./config/mailTransport");
const { contactMailOptions, sendMailOptions } = require("./config/mailPrompts");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({ message: "Root route, refer to docs for more info" });
});

app.post("/send-contact", (req, res) => {
	const mailOptions = contactMailOptions(req);

	transport.sendMail(mailOptions, (err, result) => {
		if (err) {
			transport.close();
			res.json({ message: `${err}` });
		} else {
			transport.close();
			res.json({ message: "Email sent" });
		}
	});
});

app.post("/send-email", (req, res) => {
	transport.sendMail(sendMailOptions, (err, result) => {
		if (err) {
			transport.close();
			res.json({ message: `${err}` });
		} else {
			transport.close();
			res.json({ message: "Email sent" });
		}
	});
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
