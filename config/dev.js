const dotenv = require('dotenv');
dotenv.config();

const { DATABASE, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIS_URL } =
    process.env;

module.exports = {
    googleClientID: GOOGLE_CLIENT_ID,
    googleClientSecret: GOOGLE_CLIENT_SECRET,
    mongoURI: DATABASE,
    redisUrl: REDIS_URL,
    cookieKey: '123123123',
};
