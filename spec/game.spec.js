const Game=require('./../src/game.js')


let game, player, computer


describe('Check functionality of Game Class', function(){
     it('Check draw', function(){
        //SETUP
        player={choice:'Rock'}
        computer={choice: 'Rock'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Draw')
    })
    it('Check Rock beats Scissors', function(){
        //SETUP
        player={choice:'Rock'}
        computer={choice: 'Scissors'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Player')
    })
    it('Check Rock beats Lizard', function(){
        //SETUP
        player={choice:'Lizard'}
        computer={choice: 'Rock'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Computer')
    })
    it('Check Paper beats Rock', function(){
        //SETUP
        player={choice:'Paper'}
        computer={choice: 'Rock'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Player')
    })
    it('Check Paper beats Spock', function(){
        //SETUP
        player={choice:'Paper'}
        computer={choice: 'Spock'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Player')
    })
    it('Check Scissors beat Paper', function(){
        //SETUP
        player={choice:'Paper'}
        computer={choice: 'Scissors'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Computer')
    })
    it('Check Scissors beat Lizard', function(){
        //SETUP
        player={choice:'Lizard'}
        computer={choice: 'Scissors'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Computer')
    })
    it('Check Lizard beats Spock', function(){
        //SETUP
        player={choice:'Lizard'}
        computer={choice: 'Spock'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Player')
    })
    it('Check Lizard beats Paper', function(){

        //SETUP
        player={choice:'Lizard'}
        computer={choice: 'Paper'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Player')
    })
     it('Check Spock beats Scissors', function(){
        //SETUP
        player={choice:'Scissors'}
        computer={choice: 'Spock'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Computer')
    })
    it('Check Spock beats Rock', function(){

        //SETUP
        player={choice:'Spock'}
        computer={choice: 'Rock'}
        game=new Game(player, computer)

        //EXECUTE

        //VERIFY
        expect(game.play()).toBe('Player')
    })


})