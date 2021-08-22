const options=require('./options.js')

class Game{
    constructor(player, computer, choices=options){
        this.player=player
        this.computer=computer
        this.choices=choices
        this.message
    }

    play(){
        if (this.computer.choice===this.player.choice){
            this.message='Draw'
            return 'Draw'
        }
        else if (this.choices[this.player.choice].beats.indexOf(this.computer.choice)===-1){
            this.computer.tally+=1
            this.message='Computer Wins!'
            return 'Computer'
        } else {
            this.player.tally+=1
            this.message=`${this.player.name} Wins!`
            return 'Player'
        }
    }
}


module.exports=Game