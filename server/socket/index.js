
module.exports = io => {
  io.on('connection', socket => {
  console.log(socket.id, 'online')
  socket.on('image-data', (data) => {
    socket.broadcast.emit('image-data', data)
  })
  socket.on('close', () => {
    console.log(`socket connection with id ${socket.id} has DISCONNECTED`)
  })
})

}



//handle socket