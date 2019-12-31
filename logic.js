Frogies = function () {
    let frogs = []
    let level = 0
    let seconds = 0


    const getFrogs = function () {
        return frogs
    }


    const setSeconds = function () {
        if (level == 1) {
            seconds = 5
        } else if (level > 1) {
            seconds = 5 + level - 1
        }

    }

    const getLevel = function () {
        return level
    }

    const addFrog = function () {  // Triggered when pressing the Start button
        frogs.length = level
        for (let i = 0; i < level; i++) {
            frogs[i] = createFrog(i)
        }

    }

    const startGame = function () {
        level += 1
        setSeconds()
        addFrog()
    }

    const removeFrog = function (frogID) {
        for (let frog in frogs) {
            if (frogs[frog].id == frogID) {
                frogs.splice(frog, 1)
               
            }
        }

        if (frogs.length === 0) {
            startGame()
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
        if (topNum < 10 || topNum > 81) {
            frog.top = 81
        } else {
            frog.top = topNum
        }

    }

    const frogSize = function (top, frog) {  // gets the top key value (not a percentage) and sets the font size
        let size = top
        frog.size = size
        if (size < 16) {
            frog.size = 16
        }
    }

    const createFrog = function (num) {
        frog = {}
        frog.color = randomColor()
        randomLocation(frog)
        frogSize(frog.top, frog)
        frog.id = "frog-" + num
        return frog
    }

    const countdown = function () {
        let interval = setInterval(timer,1000)
        function timer () {
            if (seconds === 0) {
                clearInterval(interval)
                render.timerDiv("timer", seconds)
                render.gameOver("timer", "game", seconds)
                level = 0
            } else {
                render.timerDiv("timer", seconds)
                seconds -= 1
            }
        }
    }

  




    return {
        getFrogs,
        setSeconds,
        getLevel,
        addFrog,
        startGame,
        removeFrog,
        randomColor,
        randomLocation,
        frogSize,
        createFrog,
        countdown
    }




}
const frogies = Frogies()