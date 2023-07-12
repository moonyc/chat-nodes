const path = require('path')
const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

const dir = path.join(__dirname, '../public')

const port = process.env.PORT || 3000



app.use(express.static(dir)) // app.use() mounts a specified middleware function at the specified path


server.listen(port, () => {
    console.log('Server is up on port ' + port)
})