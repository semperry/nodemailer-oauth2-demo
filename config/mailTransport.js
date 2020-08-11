const nodemailer = require("nodemailer");

const myOAuth2Client = require("./mailOauthConfig");

const myAccessToken = myOAuth2Client.getAccessToken();

const transport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: process.env.USER_EMAIL,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.REFRESH_TOKEN,
		accessToken: myAccessToken,
	},
});

module.exports = {
	transport,
};
