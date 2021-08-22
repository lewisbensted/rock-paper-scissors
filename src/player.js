class Player{
    constructor(name){
        this.name=name
        this.choice
        this.tally=0
    }
    choose(input){
        this.choice=input
        return this.choice
    }
}

module.exports=Player