const dotenv = require('dotenv')
dotenv.config()

const configKeys = {
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    NODE_ENV:process.env.NODE_ENV,
    JWT_SECRET:process.env.JWT_SECRET,
    TWILIO_ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
    TWILIO_SERVICE_SSID:process.env.TWILIO_SERVICE_SSID
}

module.exports = configKeys