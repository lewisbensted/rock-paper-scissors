const Player= require('./../src/player.js')

describe('Check functionality of computer class', function(){
    it('Check choose function produces random number', function(){
        //SETUP
        let player =new Player('Lewis')

        //EXECUTE
        player.choose('Rock')

        //VERIFY
        expect(player.choice).toBe('Rock')
    })
})
