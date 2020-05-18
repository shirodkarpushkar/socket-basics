var express = require('express')
var app = express()
var http = require('http').Server(app)
var PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
http.listen(PORT, () => {
    
    console.log('Server Started at PORT:',PORT)
})