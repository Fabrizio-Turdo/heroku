const express = require('express')

const app = express()
console.log(__dirname)

app.use(express.static(__dirname+'/public'))

app.get('./',(req,res)=>{
    res.render('index.html')
})

app.get('/prueba',(req,res)=>{
    console.log('Prueba heroku')
})

const PORT = process.env.PORT || 8081


app.listen(8081,()=>{
    console.log(`escuchando el puerto: ${PORT}.`)
})