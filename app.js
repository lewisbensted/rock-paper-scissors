const Player = require('./src/player.js')
const Game = require('./src/game.js')
const Computer = require('./src/computer.js')

const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

const index=require('./controllers/index.js')
app.use('/', index)

const game=require('./controllers/game.js')
app.use('/', game)

const conf=require('./controllers/confirmation.js')
app.use('/', conf)

const easyHard=require('./controllers/easyHard.js')
app.use('/', easyHard)

const again=require('./controllers/playAgain.js')
app.use('/', again)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})