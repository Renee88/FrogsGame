const render = Renderer()

$("#start").on("click", function () {
    frogies.addFrog()
    frogies.countdown()
    render.renderFrogs(frogies.getFrogs())
    render.levelNo()

})

$("#game").on("click", "i", function () {
    const frogId = $(this).attr("id")
    frogies.removeFrog(frogId)
    render.renderFrogs(frogies.getFrogs())
    render.levelNo()
})