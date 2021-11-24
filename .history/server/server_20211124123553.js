const nodemailer = require('nodemailer')
const {google} = require ('googleapis')
const config = require ('./config.js')
const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(config., clientID)
 