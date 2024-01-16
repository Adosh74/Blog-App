const dotenv = require('dotenv');
dotenv.config();

const { DATABASE, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

module.exports = {
  googleClientID: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOGLE_CLIENT_SECRET,
  mongoURI: DATABASE,
  cookieKey: '123123123',
};
