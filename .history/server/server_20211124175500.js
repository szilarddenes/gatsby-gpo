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
    let
})