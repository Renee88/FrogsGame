const render = Renderer()

$("#game").on("click", "i", function () {
    const frogId = $(this).attr("id")
    frogies.removeFrog(frogId)
    let frogs = frogies.getFrogs()
    render.renderFrogs(frogs)
})

$("#start").on("click", function () {
    render.removeGo()
    frogies.addFrog()
    render.levelNo("level")
    render.renderFrogs(frogies.getFrogs())
    let frogsNum = frogies.getFrogsNum()
    let seconds = frogies.getSeconds(frogsNum)
    frogies.countdown(seconds)
 }
)



    
        
 
    
    
    













