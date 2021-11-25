const app  = require('express')()
const PORT = 8888


app.get('/api1',(req,res)=>{

})





app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


