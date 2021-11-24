const nodemailer = require('nodemailer')
const {google} = require ('googleapis')
const config = require ('./config.js')
const OAuth2 = google.auth.OAuth2

const OAuth2Client = new OAuth2(config.clientID, config.clientSecret)
OAuth2Client.setCredentials( { refresh_token: config.refreshToken})

function sendMail (name, recipient){
    const accessToken= OAuth2Client.getAccessToken()


    
}