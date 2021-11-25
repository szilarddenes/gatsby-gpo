const express = require('express')
const app = express()
const PORT = 8888
const bodyParser = require('body-parser')
const cors = require('cors')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

app.get('/apiMail', (req, res) => {
    res.status(200).send({
        datapoint1: "🍌",
        message: "Lorem ipssum hosszu puska level",
        sent: true
    })

})

app.post('/apiMail', (req, res) => {

    const { id } = req.params
    const { data } = req.body

    if (!data) {
        res.status(418).send({
            message: 'no form data has been sent!'
        })

    }

    res.send({
        apiMail: `🍌 with your ${logo} and ID of ${id}`,
    })
})



app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


