const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const PORT = process.env.PORT || 8000
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app.get('/', (req,res) => {
    res.json({ message: 'hooray! welcome to our api!' });
    console.log(req.body)
})

app.post('/api/email', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: 'cattoday.info@gmail.com',
            pass: 'reparepA3'
        }
    })

    let mailOptions = {
        from: data.email,
        to: 'cattoday.info@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        
        <h3>Informations</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
        </ul>
        
        <h3>Message:</h3> <br>
        <p>
        ${data.message}
        </p>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            res.send(error)
        }else{
            res.send('Success')
        }
    })

    smtpTransport.close()

})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}.`)
})