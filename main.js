const render = Renderer()
render.fadeOutWelcome()

$(".start").on("click", function () {
    if($(".start")[0]){
        debugger
        console.log($(".start")[0])
        frogies.startGame()
        frogies.countdown()
        render.renderFrogs(frogies.getFrogs())
        render.levelNo()
        render.unableStartButton()
    } 
}) 

$("#game").on("click", "i", function () {
    const frogId = $(this).attr("id")
    frogies.removeFrog(frogId)
    render.renderFrogs(frogies.getFrogs())
    render.levelNo()
})