require("dotenv").config();
// console.log(process.env)

const PORT = process.env.PORT;
const ENVIRONMENT = process.env.ENVIRONMENT;
const MONGODB_URI = ENVIRONMENT === 'production' ? process.env.MONGODB_URI_PRODUCTION : process.env.MONGODB_URI_LOCAL;
const SECRET = process.env.SECRET;
const SERVICE_MAILING_ADDRESS = process.env.SERVICE_MAILING_ADDRESS;
const SERVICE_MAILING_PASSWORD = process.env.SERVICE_MAILING_PASSWORD;

exports.constant = {
    PORT,
    MONGODB_URI,
    SECRET,
    SERVICE_MAILING_ADDRESS,
    SERVICE_MAILING_PASSWORD
}