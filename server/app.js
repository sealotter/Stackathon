const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

app.use('/public', express.static(path.join(__dirname, '../public')))
app.use('/dist', express.static(path.join(__dirname, '../dist')))



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 



module.exports = app
