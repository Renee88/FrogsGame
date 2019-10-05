const Renderer = function () {

    const getSize = function (frog) {
        return frog.size
    }
    const getColor = function (frog) {
        return frog.color
    }

    const setPosition = function (left, top, elementId) {
        document.getElementById(elementId).style.left = left
        document.getElementById(elementId).style.top = top

    }

    const setColor = function (elementId, elementColor) {
        $(`#${elementId}`).css("color", elementColor)
    }

    const setSize = function (elementId, elementSize) {
        $(`#${elementId}`).css("fontSize", elementSize)
    }

    // displays the frogs one by one according to the array in logic
    displayFrogs = function (frogs) {
        let idNum = 0
        for (let frog of frogs) {
            const frogSize = getSize(frog)
            let frogColor = getColor(frog)
            let top = frog.top + "vh"
            let left = frog.left + "vw"
            let frogId = frog.id
            idNum += 1
            let divDataId = `box-${idNum} `
            $("#game").append(`<div data-id = ${divDataId}><i class="fas fa-frog" id =${frogId}></i></div>`)
            setColor(frogId, frogColor)
            setSize(frogId, frogSize)
            setPosition(left, top, frogId)
        }
    }

    //Removes the Go! from the screen when the user starts playing
    const removeGo = function () { // Removes the go when the user hit the start button
        $("#go").remove()
    }





    const gameOver = function (timerId,gameId, seconds) {   // If the user had lost displays a message and return the value true
        timeIsOff = $(`#${timerId}`).text()
        if (seconds == 0 && timeIsOff == "You have 0 seconds") {
            $(`#${gameId}`).text("You've lost, time's off")
            document.getElementById(gameId).style.alignContent = "center"
            document.getElementById(gameId).style.justifyContent = "center"
            document.getElementById(gameId).style.fontSize = "50px"
            return true
        }
    }


    const timerDiv = function (timerId,seconds) {  // Generates a timer Div - timer id input is without the #
        $(`#${timerId}`).text(`You have ${seconds} seconds`)
    }
    
    const renderFrogs = function (frogs) {
        $("#game").empty()
        displayFrogs(frogs)
    }
        

    
    
    


    return {
        removeGo,
        displayFrogs,
        gameOver,
        timerDiv,
        renderFrogs

    }


}


