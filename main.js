const render = Renderer()

$("#game").on("click", "i", function(){
const frogId = $(this).attr("id") 
frogies.removeFrog(frogId)
render.renderFrogs(frogies.getFrogs())
})

$("#start").on("click", function(){
    let frogs = frogies.getFrogs()
    if(frogs!=[]){
        frogies.emptyFrogs()
    }
    render.removeGo()
    frogies.addFrog()
    frogsNum = frogs.length
    render.renderFrogs(frogies.getFrogs())
    let seconds = 5
    render.countdown("timer","game",seconds)
     if($("#game").querySelector("i") == null && frogs != []){
      for (i=1; i=frogsNum){
        frogies.addFrog()
        render.renderFrogs(frogies.getFrogs())  
       }
      }
      
    
})
     
     
    
        
    
    

