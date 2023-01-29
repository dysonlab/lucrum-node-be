const fs = require("fs")
const nodemailer = require("nodemailer")
const smtpTransport = require("nodemailer-smtp-transport")
const handlebars = require("handlebars")
const { constant } = require("../../config/constant")

const emailAddress = constant.SERVICE_MAILING_ADDRESS
const emailPassword = constant.SERVICE_MAILING_PASSWORD

const readHTMLFile = function(path, callback){
    fs.readFile(path, {encoding:"utf-8"}, function(err, html){
        if(err){
            callback(err)
        }
        else{
            callback(null, html)
        }
    })
}

const transporter = nodemailer.createTransport(smtpTransport({
    service: "gmail",
    auth: {
        user: emailAddress,
        pass: emailPassword
    }
}));


exports.sendConfirmationEmail = async(user) => {
    readHTMLFile(`${__dirname}/template/confirmation.html`, function(err,html){
        if (err) {
            console.log("readHTMLFile() error", err);
            return;
         }
         const template = handlebars.compile(html);
         const replacements = {
            firstName: user.firstName
         }
         const htmlToSend = template(replacements)
         const mailOptions = {
            from: emailAddress,
            to: user.email,
            userId: user._id, 
            subject: "Account Confirmation",
            html: htmlToSend
        }
    
        transporter.sendMail(mailOptions, function(err, response){
            if (err) {
                console.log("sendMail() error", err);
                return;
             }
             else
             {
                console.log("sendMail() response", response)
             }
        })
    });
}