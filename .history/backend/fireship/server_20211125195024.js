const express = require('express')
const app = express()
const PORT = 8888
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')



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
    const { name } = req.body
    const { lastName } = req.body
    const { email } = req.body
    const { phone } = req.body
    const { message } = req.body

    // var jsonObj = JSON.parse(data)
    // console.log(jsonObj)
    // const { id } = req.params
    // const {data2} = JSON.stringify(jsonObj)

    if (!name && !lastName && !email && !phone && !message) {
        res.status(418).send({
            message: 'no complex form data has been sent!'
        })

    }

    res.send({
        Name: `🍌 ${name}`,
        Name: `🍌 ${name}`,
        Name: `🍌 ${name}`,
    })


    fs.appendFile("db.json", name, err => {
        if (err) throw err;
        console.log('File successfully written to disk')
    })

})



app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


