Renderer = function () {

    addFrogDiv = function (frogs) {
        let frogCounter = 0
        for (let frog of frogs) {
            const frogSize = getSize(frog)
            fontSize = frogSize 
            frogCounter += 1
            frogColor = getColor(frog)
            let top = frog.top 
            let left = frog.left 
            $("#game").append(`<div data-id = box-${frogCounter} position:relative><i class="fas fa-frog" data-id =frog-${frogCounter}></i></div>`)
            $(`[data-id=frog-${frogCounter}]`).css("color",frogColor)
            $(`[data-id=frog-${frogCounter}]`).css("fontSize", fontSize )
            $(`[data-id=frog-${frogCounter}]`).offset("position","absolute")
            $(`[data-id=frog-${frogCounter}]`).css({ left: 20 , top: 30 })

        }
    }
    const removeGo = function () {
        $("#go").remove()
    }

    const getSize = function (frog) {
        return frog.size
    }

    const getColor = function (frog) {
        return frog.color
    }

    const timerDiv = function () {

    }

    return {
        removeGo,
        addFrogDiv
    }

}

const render = Renderer()
let frogs = frogies.getFrogs()
console.log(frogs)
render.removeGo()
render.addFrogDiv(frogs)



