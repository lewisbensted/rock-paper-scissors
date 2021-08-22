const express = require('express')
const router = express.Router()

const Player = require('./../src/player.js')
const Game = require('./../src/game.js')
const Computer = require('./../src/computer.js')


router.post('/game', (req, res) => {
  let easyHard=req.body.easyHard
  let game=req.app.locals.game
  if (easyHard==='Hard'){
        game.computer.arr=['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard']
  } else if (easyHard==='Easy') {
        game.computer.arr=['Rock', 'Paper', 'Scissors']
  }
  req.app.locals.easyHard=easyHard
  res.render('choice.ejs', {easyHard:easyHard})
})

module.exports=router