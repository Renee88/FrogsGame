Frogies = function () {
    let frogs = []
    let frogsNum = frogs.length
    let clicks = 0


    const getClicks = function () {
        return clicks
    }

    const getFrogs = function () {
        return frogs
    }

    const getFrogsNum = function () {
        return frogsNum
    }

    const getSeconds = function (frogsNum) {
        if (frogsNum != 0) {
            let seconds = 2 * (frogsNum - 1) + 5
            return seconds
        } else if (frogsNum == 0) {
            seconds = 5
            return seconds
        }


    }

    const addFrog = function () {  // Triggered when pressing the Start button

        for (let i = 0; i < clicks + 1; i++) {
            let frog = {}
            frog.color = randomColor()
            randomLocation(frog)
            frogSize(frog.top, frog)
            frogs.push(frog)
            frog.id = "frog-" + frogsNum
        }

    }

    const removeFrog = function (frogID) {
        for (let frog in frogs) {
            if (frogs[frog].id == frogID) {
                frogs.splice(frog, 1)
                clicks += 1
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

    const countdown = function (seconds) {
        let interval = setInterval(timer, 1000);
        function timer() {
            if (seconds == 0) {
                clearInterval(interval)
                render.gameOver("timer","game",seconds)
                return false
            } else {
                seconds -= 1
                render.timerDiv("timer", seconds)
            }
        }
    }

    return {
        getFrogs,
        getFrogsNum,
        getSeconds,
        addFrog,
        removeFrog,
        randomColor,
        randomLocation,
        frogSize,
        countdown
    }







}

const frogies = Frogies()
frogies.countdown(5)