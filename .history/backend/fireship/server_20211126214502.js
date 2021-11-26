const express = require('express')
const app = express()
const PORT = 8888
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const nodemailer = require('nodemailer')
// const { google } = require('googleapis')
// const OAuth2 = google.auth.OAuth2

// const OAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
// OAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

require('dotenv').config()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get('/apiMail', (req, res) => {
    res.status(200).send({
        datapoint1: "🍌",
        message: "What you wanna GET GET GET???",
        sent: true
    })

})


app.post('/apiMail', (req, res) => {
    const { id } = req.body
    const { name } = req.body
    const { lastName } = req.body
    const { email } = req.body
    const { phone } = req.body
    const { message } = req.body


    // SAVE POST TO DATABASE
    if (!name && !lastName && !email && !phone && !message) {
        res.status(418).send({
            message: 'no complex form data has been sent!'
        })

    }
    console.log(`Form with id of: ${id} has been submitted.`)

    let resObj = {
        id: `${id}`,
        Name: ` 🍌 ${name}`,
        LastName: ` 🍕 ${lastName}`,
        Email: ` 💌${email}`,
        Phone: ` 📞 ${phone}`,
        Message: ` 📑 ${message}`,
    }

    const db = 'db.json'

    let sendData = JSON.stringify(resObj)
    res.send(sendData)


    async function pushMail(saveToDb) {


        // SEND POST IN EMAIL
        // const accessToken = OAuth2Client.getAccessToken()

        let transport = nodemailer.createTransport({
            service: 'gmail',
            // name: '127.0.0.1',
            host: 'smtp.gmail.com',
            port: 587,
            logger: true,
            debug: true,
            tls: { rejectUnauthorized: false },
            // auth: {
            //     type: 'OAuth2',
            //     user: process.env.USER,
            //     clientId: process.env.CLIENT_ID,
            //     clientSecret: process.env.CLIENT_SECRET,
            //     refreshToken: process.env.REFRESH_TOKEN,
            //     accessToken: accessToken
            // },

            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },

        })

        let mailOptions = {
            from: `${email}`,
            to: 'cattoday.info@gmail.com',
            subject: `Message from ${name}`,
            html: `

            <h3>Informations</h3>
            <p>Jelentkezés azonosítója: ${id}</p>
            <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
            </ul>

            <h3>Message:</h3> <br>
            <p>
            ${message}
            </p>
            `
        }



        transport.sendMail(mailOptions, function (error, result) {
            if (error) {
                console.log('Error happened: ', error)
            } else {
                console.log('Success: ', result)

            }
            transport.close()
        })
    // SEND MAIL AND SAVE TO JSON
     saveToDb()



    }

    function saveToDb() {

        fs.readFile(db, 'utf8', (err, data) => {
            if (err) throw err

            // IF IS EMPTY
            if (data.length == 0) {
                fs.appendFile(db, '[' + sendData + ',', err => {
                    if (err) throw err;
                    console.log('File successfully written to empty database.')
                })

                // IF IS HAS DATA
            } else if (data.includes(']')) {

                // CHECK THE CLOSING ]
                if (data.includes(']')) {
                    console.log(data.indexOf(']'))
                    console.log(data)
                    console.log(data.length)
                    let newData = data.substring(0, data.length - 1)

                    fs.appendFile(db, newData + ']', err => {
                        if (err) throw err;
                        console.log('File successfully written to database.')
                    })
                }

            } else {
                // IF IS THE SECOND ENTRY IN DB    
                fs.appendFile(db, sendData + ']', err => {
                    if (err) throw err;
                    console.log('File successfully written to database.')
                })

            }

        })
    }


    // SEND MAIL AND SAVE TO JSON
    pushMail()
   



})



app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


