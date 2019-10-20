Frogies = function () {
    let frogs = []
    let level = 1
    let seconds


    const getFrogs = function () {
        return frogs
    }


    const getSeconds = function () {
        if (level == 1) {
            seconds = 5
            console.log(seconds)
        } else if (level > 1) {
            seconds = 5 + level-1
            console.log(seconds)
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
        for (let i = 0; i < level; i++) {
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


    const countdown = function () {
        let interval = setInterval(timer, 1000);
        function timer() {
            if (seconds === 0) {
                clearInterval(interval)
                render.timerDiv("timer", seconds)
                render.gameOver("timer", "game", seconds)
            } else if (frogs.length === 0) {
                level += 1
                clearInterval(interval)
                render.timerDiv("timer", seconds)
            } else {
                render.timerDiv("timer", seconds)
                seconds -= 1
            }



        }
    }

    const restartCountdown = function (seconds){
        countdown(seconds)
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
        getLevel,
        restartCountdown
    }

}





const frogies = Frogies()