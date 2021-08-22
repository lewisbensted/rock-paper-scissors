const express = require('express')
const router = express.Router()



router.post('/confirmation', (req, res) => {
  let game=req.app.locals.game
  let easyHard=req.app.locals.easyHard
  game.computer.choose()
  game.player.choose(req.body.choice)
  game.play()
  res.render('conf.ejs', {game:game, easyHard:easyHard})
})

module.exports=router