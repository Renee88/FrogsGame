Frogies = function () {
    let frogs = []
    let frogCounter = 0
    
    const getFrogs = function () {

        return frogs
    }

    const emptyFrogs = function(){
        frogs = []
    }

    const addFrog = function () {  // Triggered when pressing the Start button
        let frog = {}
        frogCounter += 1
        frog.color = randomColor()
        randomLocation(frog)
        frogSize(frog.top, frog)
        frogs.push(frog)
        frog.id = "frog-"+ frogCounter
        return frog
    }

    const removeFrog = function(frogID){ 
        for(let frog in frogs){
            if (frogs[frog].id == frogID){
               frogs.splice(frog,1)
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
        if(topNum < 10 | topNum > 81){
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


    



    return {
        getFrogs,
        addFrog,
        removeFrog,
        randomColor,
        randomLocation,
        frogSize,
        emptyFrogs
    }
}

let frogies = Frogies()

let frogCounter = 0
frogies.addFrog()




