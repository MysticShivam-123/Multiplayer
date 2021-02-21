class Form{
    constructor(){
    this.input = createInput()
    this.button = createButton("Let's Go")
    this.greet = createElement("h3")
    } 
    display(){
        var title = createElement("h2")
        title.html("Turbo")
        title.position(200,20)
        this.input.position(200,150)
        this.button.position(300,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            player.updateplayerInfo()
            this.greet.html("Hello " + player.name)
            this.greet.position(200,160)
            playercount1+=1
            player.index = playercount1
            player.updatecount(playercount1)
        })
}
    hide(){
        this.input.hide()
        this.button.hide()
        this.greet.hide()
    }
} 
