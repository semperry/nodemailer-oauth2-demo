const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	"https://developers.google.com/oauthplayground"
);

myOAuth2Client.setCredentials({
	refresh_token: process.env.REFRESH_TOKEN,
});

module.exports = myOAuth2Client;
