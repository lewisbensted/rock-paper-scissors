const Computer = require('./../src/computer.js')

describe('Check functionality of computer class', function(){
    it('Check choose function produces random number', function(){
        //SETUP
        spyOn(global.Math, 'random').and.returnValue(0.5)
        let comp=new Computer()

        //EXECUTE

        //VERIFY
        expect(comp.choose()).toBe('Paper')
    })
    it('Check choose function produces random number', function(){
        //SETUP
        spyOn(global.Math, 'random').and.returnValue(0)
        let comp=new Computer()

        //EXECUTE

        //VERIFY
        expect(comp.choose()).toBe('Rock')
    })
})