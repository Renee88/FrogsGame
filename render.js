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

    const displayFrogs = function (frogs) {
        let idNum = 0
        for (let frog of frogs) {
            const frogSize = getSize(frog)
            let frogColor = getColor(frog)
            let top = frog.top + "vh"
            let left = frog.left + "vw"
            let frogId = frog.id
            idNum += 1
            let divDataId = `box-${idNum}`
            $("#game").append(`<div data-id = ${divDataId}><i class="fas fa-frog" id =${frogId}></i></div>`)
            setColor(frogId, frogColor)
            setSize(frogId, frogSize)
            setPosition(left, top, frogId)
        }
    }

    const removeGo = function () { 
        $("#go").remove()
    }


    const levelNo = function(){
        level = frogies.getLevel()
        $("#level").text(`level ${level}`)
    }

    const gameOver = function (timerId,gameId, seconds) {  
        timeIsOff = $(`#${timerId}`).text()
        if (seconds == 0 && timeIsOff == "You have 0 seconds") {
            $("#game").empty()
            $(`#${gameId}`).append("<div class = lost> You've lost, time's off </div>")
            $(`#${gameId}`).append("<button>Start a new game</button>")
            $(`#${gameId}`).on("click","button",function(){
                location.reload()
            })
            document.getElementById(gameId).style.fontFamily = "'Underdog', cursive"
            document.getElementById(gameId).style.alignContent = "center"
            document.getElementById(gameId).style.justifyContent = "center"
            $("button").css({display: "grid",justifySelf: "center", width: "fit-content"})
            document.getElementById(gameId).style.fontSize = "50px"
            
            
            
        }
    }

    const timerDiv = function (timerId,seconds) {  
        $(`#${timerId}`).text(`You have ${seconds} seconds`)
    }


    
    const renderFrogs = function (frogs) {
        $("#game").empty()
        levelNo()
        displayFrogs(frogs)
    }
        

    const fadeOutWelcome = function(){
        setTimeout(function(){
            $("#welcome-container").fadeOut(1000)
        },1000)
        
    }
    
    


    return {
        removeGo,
        displayFrogs,
        renderFrogs,
        levelNo,
        gameOver,
        timerDiv,
        fadeOutWelcome

    }


}


