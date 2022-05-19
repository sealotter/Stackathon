
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const server = app.listen(port,() => console.log(`listening on port ${port}`))


const io = require('socket.io')(server)

// io.on('connection', socket => {
//   console.log(socket.id, 'online')
//   socket.on('image-data', (data) => {
//     socket.broadcast.emit('image-data', data)
//   })
//   socket.on('close', () => {
//     console.log(`socket connection with id ${socket.id} has DISCONNECTED`)
//   })
// })


// io.on('connection', socket => {
//   console.log(socket.id, 'online')
//   socket.on('image-data', (data) => {
//     socket.broadcast.emit('image-data', data)
//   })
  
// })

require('./socket')(io)


app.use(express.json())


app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/public', express.static(path.join(__dirname, '../public')))





app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

module.exports = app
