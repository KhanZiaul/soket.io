const express = require('express');
const app = express()
const http = require('https').createServer(app)

const port = process.env.PORT || 6000


http.listen(port, ()=> {
    console.log(`port is running ${port}`)
})

app.get('/',(req,res) =>{
   res.sendFile(__dirname + '/index.html')
})