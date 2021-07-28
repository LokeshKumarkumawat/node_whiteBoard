require('dotenv').config()
const express =  require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')


app.use(express.static(path.resolve(__dirname + '/public')))

app.get('/', (req, res) =>{
    res.render('index')
})
 
const io = require('socket.io')


app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))