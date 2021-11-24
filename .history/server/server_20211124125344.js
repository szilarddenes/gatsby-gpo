const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const config = require('./config.js')
const OAuth2 = google.auth.OAuth2

const OAuth2Client = new OAuth2(config.clientID, config.clientSecret)
OAuth2Client.setCredentials({ refresh_token: config.refreshToken })

function sendMail(name, recipient) {
    const accessToken = OAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: config.user,
            clientId: config.clientID,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: accessToken
        }
    })

    const mailOptions= {
        from: `GPO Auto <${config.user}>`,
        to: recipient,
        subject: 'Test Message From Nodemailer',
        html: get_html_message()
    }

    transport.sendmail({

    }

}