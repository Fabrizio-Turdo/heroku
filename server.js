const express = require('express')

const app = express()

app.use(express.static(__dirname+'/public'))

app.get('./',(req,res)=>{
    res.render('index.html')
})

const PORT = process.env.PORT || 8081


app.listen(8081,()=>{
    console.log(`escuchando el puerto: ${PORT}.`)
})