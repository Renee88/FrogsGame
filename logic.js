Frogies = function () {
    let frogs = []
    let level = 1


    const getFrogs = function () {
        return frogs
    }


    const getSeconds = function (level) {
        if (level == 1) {
            seconds = 5
            return seconds
        } else if (level > 1) {
            let seconds = 5 + level
            return seconds
        }


    }


    const getLevel = function () {
        return level
    }

    const createFrog = function (num) {
        frog = {}
        frog.color = randomColor()
        randomLocation(frog)
        frogSize(frog.top, frog)
        frog.id = "frog-" + num
        return frog

    }

    const addFrog = function () {  // Triggered when pressing the Start button
            frogs.length = level
            for(let i = 0; i <level ; i++){
                frogs[i] = createFrog(i)
            }       
  
    }


    const removeFrog = function (frogID) {
        for (let frog in frogs) {
            if (frogs[frog].id == frogID) {
                frogs.splice(frog, 1)
            }
        }
    }

    const randomColor = function () {  // Random color for each frog
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const randomLocation = function (frog) {    // Adds left and top values to locate the frog randomly and relatively to the parent div
        leftNum = Math.floor(Math.random() * 85)
        frog.left = leftNum
        topNum = Math.floor(Math.random() * 82)
        if (topNum < 10 | topNum > 81) {
            frog.top = 81
        } else {
            frog.top = topNum
        }

    }

    const frogSize = function (top, frog) {  // gets the top key value (not a percentage) and sets the font size
        let size = 100 - top
        frog.size = size
        if (size < 16) {
            frog.size = 16
        }
    }
    
    const breakTimer = function(interval){
        if(frogs.length === 0){
            clearInterval(interval)
            level +=1
            addFrog()
            return getSeconds(level) 
        }
    }
    
    const countdown = function (seconds) {
        let interval = setInterval(timer, 1000);
        function timer() {
            if (seconds == 0) {
                clearInterval(interval)
                render.timerDiv("timer", seconds)
                render.gameOver("timer", "game", seconds)
            } else {
                render.timerDiv("timer", seconds)
                seconds -= 1
                seconds = breakTimer(interval)
                
            }
        }
    }

  

    return {
        getFrogs,
        getSeconds,
        addFrog,
        removeFrog,
        randomColor,
        randomLocation,
        frogSize,
        countdown,
        getLevel
    }

}





const frogies = Frogies()
