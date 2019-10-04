Renderer = function () {
    
    addFrogDiv = function (frogs) {
        let frogCounter = 0
        for (let frog of frogs) {
            const frogSize = getSize(frog)
            frogCounter += 1
            let frogColor = getColor(frog)
            let top = frog.top + "vh"
            let left = frog.left + "vw"
            let frogId = `frog${frogCounter}`
            let divId = `box${frogCounter} `
            $("#game").append(`<div id = ${divId}><i class="fas fa-frog" id =${frogId}></i></div>`)
            setColor(frogId,frogColor)
            setSize(frogId,frogSize)
            setPosition(left,top,frogId)
            
        }
    }
    const removeGo = function () { // Removes the go when the user hit the start button
        $("#go").remove()
    }

 
    const countdown = function (timerId,gameId,seconds){ // Shows the use the amount of time left
        let id = setInterval(timer,1000)
        function timer(){
            if (seconds == 0) {
                clearInterval(id);
                gameOver(timerId,gameId)      
            } else {
                seconds -=1
                console.log(seconds)
                timerDiv(timerId,seconds)
                
    
            }
        }            
    
}

const gameOver = function(timerId,gameId){
    timeIsOff = $(`#${timerId}`).text()
    if(timeIsOff == "You have 0 seconds"){
        $(`#${gameId}`).text("You've lost, time's off")
        document.getElementById(gameId).style.alignContent="center"
        document.getElementById(gameId).style.justifyContent = "center"
        document.getElementById(gameId).style.fontSize = "50px"
    }
}


    const timerDiv = function (timerId, seconds) {  // Generates a timer Div
        $(`#${timerId}`).text( `You have ${seconds} seconds`)
    }

    const getSize = function (frog) {
        return frog.size
    }

    const getColor = function (frog) {
        return frog.color
    }

    const setPosition = function(left,top,elementId){
       document.getElementById(elementId).style.left = left 
       document.getElementById(elementId).style.top = top

    }

    const setColor = function(elementId,elementColor){
        $(`#${elementId}`).css("color", elementColor)
    }

    const setSize = function(elementId,elementSize){
        $(`#${elementId}`).css("fontSize", elementSize)
    }

    return {
        removeGo,
        addFrogDiv,
        countdown,
        gameOver
    }

}

const render = Renderer()
let frogs = frogies.getFrogs()
console.log(frogs)
render.removeGo()
render.addFrogDiv(frogs)
render.countdown("timer", "game" , 5)
render.gameOver("timer","game")


