const express = require('express')
const app = express()
const PORT = 8888
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const nodemailer = require('nodemailer')


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
    const db = 'db.json'
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

    let sendData = JSON.stringify(resObj)
    res.send(sendData)

    fs.readFile(db, (err, data) => {
        if (err) throw err
        if (data.length == 0) {
            fs.appendFile(db, '[' + sendData + ',', err => {
                if (err) throw err;
                console.log('File successfully written to empty database.')
            })
        } else {
            fs.appendFile(db, sendData + ',', err => {
                if (err) throw err;
                console.log('File successfully written to database.')
            })
        }
    })


    function sendEmail(name, recipient) {
    // SEND POST IN EMAIL
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: 'cattoday.info@gmail.com',
            pass: 'reparepA3'
        },
        tls: {rejectUnauthorized: false}
    })

    // let mailOptions = {
    //     from: `${email}`,
    //     to: 'cattoday.info@gmail.com',
    //     subject: `Message from ${name}`,
    //     html: `
        
    //     <h3>Informations</h3>
    //     <ul>
    //     <li>Name: ${name}</li>
    //     <li>Email: ${email}</li>
    //     <li>Phone: ${phone}</li>
    //     </ul>
        
    //     <h3>Message:</h3> <br>
    //     <p>
    //     ${message}
    //     </p>
    //     `
    // }

    let mailOptions = {
        from: 'SOLIDGARDEN ',
        to: 'cattoday.info@gmail.com',
        subject: 'Message Testing miii',
        html: `szia ${}`
    }
    
    smtpTransport.sendMail(mailOptions, (error, res) => {
        if (error) {
            res.send(error)
        } else {
            res.send('smtpTransport Success 🎉🎉🎉')
        }
    })

    smtpTransport.close()
    }
    sendEmail('URAM','cattoday.info@gmail.com')

})



app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


