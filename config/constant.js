require("dotenv").config();
console.log(process.env)

const IS_PRODUCTION = process.env.GCLOUD_PROJECT ? true : false;
const MONGODB_URI = IS_PRODUCTION ? process.env.MONGODB_URI_PRODUCTION : process.env.MONGODB_URI_DEVELOPMENT;
const SECRET = process.env.SECRET;
const SERVICE_MAILING_ADDRESS = process.env.SERVICE_MAILING_ADDRESS;
const SERVICE_MAILING_PASSWORD = process.env.SERVICE_MAILING_PASSWORD;

exports.constant = {
    IS_PRODUCTION,
    MONGODB_URI,
    SECRET,
    SERVICE_MAILING_ADDRESS,
    SERVICE_MAILING_PASSWORD
}