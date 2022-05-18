
module.exports = io => {
  io.on('connection', socket => {
  console.log(socket.id, 'online')
  socket.on('image-data', (data => {
    socket.broadcast.emit('image-data', data)
  }))
})

console.log('server environment', process.env.NODE_ENV)
}



//handle socket