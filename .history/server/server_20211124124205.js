const nodemailer = require('nodemailer')
const {google} = require ('googleapis')
const config = require ('./config.js')
const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(config.clientID, config.clientSecret)
 OAuth2_client.setCredentials( { refresh_token: config.refreshToken})

function sendMail (name, recepi)