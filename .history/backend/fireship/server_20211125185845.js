const express = require('express')
const app = express()
const PORT = 8888
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


app.use(express.json())

app.get('/api1', (req, res) => {
    res.status(200).send({
        datapoint1: "🍌",
        message: "Lorem ipssum hosszu puska level",
        sent: true
    })

})

app.post('/api1/:id', (req, res) => {

    const { id } = req.params
    const { logo } = req.body

    if (!logo) {
        res.status(418).send({
            message: 'We need a logo!'
        })

    }

    res.send({
        api1: `🍌 with your ${logo} and ID of ${id}`,
    })
})



app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


