var express = require('express')
var app = express()
var http = require('http').Server(app)
var PORT = process.env.PORT || 3000
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

io.on('connection', () => {
    console.log("user conected on socket")
})




http.listen(PORT, () => {
    
    console.log('Server Started at PORT:',PORT)
})