class Player{
    constructor(){
this.name = null
this.distance = 0
this.index = null 
    }
      getCount(){
          database.ref("playercount").on("value",(data)=>{
              playercount1 = data.val()
          })
      } 
      updatecount(count){
          database.ref("/").update({
              playercount: count
          })
      }
      updateplayerInfo(){
         var playerIndex = "players/player"+ this.index; 
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
      }
     static getplayerInfo(){
          database.ref("players").on("value",(data)=>{
              allplayerInfo = data.val()
          })
        
      }
}
