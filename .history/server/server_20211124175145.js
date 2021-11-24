const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors =require('cors')


const app = express
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))