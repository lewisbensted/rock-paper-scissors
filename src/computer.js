class Computer{
    constructor(arr=['Rock', 'Paper', 'Scissors']){
        this.arr=arr
        this.choice
        this.tally=0
    }
    choose(){
        this.choice=this.arr[Math.floor(Math.random() * this.arr.length)]
        return this.choice
    }
}

module.exports=Computer