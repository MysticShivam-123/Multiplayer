class Game{
    constructor(){

    }
    getState(){
        database.ref("gamestate").on("value",function (data){
        gamestate1 = data.val()
        })
    }
    updateState(state){
        database.ref("/").update({
        gamestate: state
        })
    }
    start(){
        if(gamestate1=== 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        Player.getplayerInfo()
        if(allplayerInfo!== undefined){

        var ypos = 150
        for(var plr in allplayerInfo){
            ypos+=10
            textSize(15)
            text(allplayerInfo[plr].name+": "+ allplayerInfo[plr].distance,150,ypos)
        }
    }
        if(keyDown(UP_ARROW)&& player.index!== null){
            player.distance+= 30 
            player.updateplayerInfo()
        }
    }
    
}



