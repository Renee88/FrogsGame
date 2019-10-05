const render = Renderer()

$("#game").on("click", "i", function () {
    const frogId = $(this).attr("id")
    frogies.removeFrog(frogId)
    render.renderFrogs(frogies.getFrogs())
})

$("#start").on("click", function () {
    render.removeGo()
    frogies.addFrog()
    render.renderFrogs(frogies.getFrogs())
    let frogsNum = frogies.getFrogsNum()
    let seconds = frogies.getSeconds(frogsNum)
    frogies.countdown(seconds)
 }
)



    
        
 
    
    
    













