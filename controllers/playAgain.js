const express = require('express')
const router = express.Router()

router.post('/playAgain', (req, res) => {
  let game=req.app.locals.game
  res.render('choice.ejs', {game:game})
})

module.exports=router