const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const dir = path.join(__dirname, '../public')

const port = process.env.PORT || 3000



app.use(express.static(dir)) // app.use() mounts a specified middleware function at the specified path

io.on('connection', () => {
    console.log('New WebSocket Connection')
})

server.listen(port, () => {
    console.log('Server is up on port ' + port)
})