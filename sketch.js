var database
var gamestate1 = 0
var playercount1
var form, game, player
var allplayerInfo
var distance = 0
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    if(playercount1=== 4){
        game.updateState(1)
    }
    if(gamestate1 ===1){
        clear()
        game.play()
    }
}


