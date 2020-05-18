var express = require('express')
var app = express()
var http = require('http').Server(app)
var PORT = process.env.PORT || 3000
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log("user conected on socket")
    socket.on('message', (message) => {
        console.log("Message recieved: " + message.text)
        socket.broadcast.emit('message',message)
    })
    socket.emit('message', {
        text:'Welcome to chat Application!'
    })
})




http.listen(PORT, () => {
    
    console.log('Server Started at PORT:',PORT)
})