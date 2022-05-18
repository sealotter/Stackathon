
// const express = require('express')
// const app = express()
// const path = require('path')
// const morgan = require('morgan')

// const port = process.env.PORT || 5000 
// const server = app.listen(port,() => console.log(`listening on port ${port}`))
// const io = require('socket.io')(server)

// //handle socket
// require('./socket')(io)


// app.use(express.json())
// app.use(morgan('dev'))

// app.use('/dist', express.static(path.join(__dirname, '../dist')))
// app.use('/public', express.static(path.join(__dirname, '../public')))





// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// }); 

// module.exports = app

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const server = app.listen(port,() => console.log(`listening on port ${port}`))
//require('http').createServer(app)

const io = require('socket.io')(server)

const morgan = require('morgan')

io.on('connection', socket => {
  console.log(socket.id, 'online')
  socket.on('image-data', (data) => {
    socket.broadcast.emit('image-data', data)
  })
  
})

//require('./socket')(io)


app.use(express.json())
app.use(morgan('dev'))

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/public', express.static(path.join(__dirname, '../public')))





app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

module.exports = app
