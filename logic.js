Frogies = function () {
    let frogs = []

    const getFrogs = function () {
        return frogs
    }

    const addFrog = function () {  // Triggered when pressing the Start button
        let frog = {}
        frog.color = randomColor()
        randomLocation(frog)
        frogSize(frog.top, frog)
        frogs.push(frog)
        return frog
    }

    const removeFrog = function (frogIndex) {
        frogs.splice(frogIndex, 1)
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
        leftNum = Math.floor(Math.random() * 100)
        frog.left = leftNum
        topNum = Math.floor(Math.random() * 100)
        frog.top = topNum
    }

    const frogSize = function (top, frog) {  // gets the top key value (not a percentage) and sets the font size
        let size = 100 - top
        frog.size = size
        if (size < 16) {
            frog.size = 16
        }
    }

    const countdown = function (seconds) {

        setInterval(() => {
            if (seconds > 0) {
                seconds -= 1
            }
        }, 1000)

    }



    return {
        getFrogs,
        addFrog,
        removeFrog,
        randomColor,
        randomLocation,
        frogSize,
        countdown
    }
}

let frogies = Frogies()

frogies.addFrog()





