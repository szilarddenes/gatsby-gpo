const app  = require('express')()
const PORT = 8888


app.get('/api1',(req,res)=>{
    res.status(200).send({
        datapoint1:"🍌",
        message:"Lorem ipssum hosszu puska level",
        sent:true
    })

})

app.post




app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


