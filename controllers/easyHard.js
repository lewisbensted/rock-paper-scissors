const express = require('express')
const router = express.Router()

const Player = require('./../src/player.js')
const Game = require('./../src/game.js')
const Computer = require('./../src/computer.js')

router.post('/easyHard', (req, res) => {
  let player=new Player(req.body.name)
  let computer=new Computer()
  let game=new Game(player, computer)
  req.app.locals.game=game
  res.render('easyOrHard.ejs')
})

router.get('/easyHard', (req, res) => {
  res.render('easyOrHard.ejs')
})

module.exports=router