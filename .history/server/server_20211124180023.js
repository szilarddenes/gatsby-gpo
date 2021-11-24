const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors =require('cors')


const app = express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.get('/', ()=>{
    resizeBy.send('welcome to my form')
})

app.post('/api/forma',(req, res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port:465,
        auth:{
            user:'cattoday.info@gmail.com',
            pass:'reparepA3'
        }
    })

    let mailOptions ={
        from: data.email,
        to:'cattoday.info@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        
        <h3>Informations</h3>
        <ul>
        <li></li>
        </ul>

        
        
        
        `
    }


})