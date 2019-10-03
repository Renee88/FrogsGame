Renderer = function() {
    let frogCounter = 0
    addFrogDiv = function(frogs){
        for (let frog of frogs){
        const frogSize = getSize(frog)
        fontSize = frogSize + "px"
        frogCounter +=1
        frogColor = getColor(frog)
        let top = frog.top + "px"
        let left = frog.left + "px"
        $("#game").append(`<div class = frog data-id = f${frogCounter}><i class="fas fa-frog"></i></div>`)
        $(`[data-id=f${frogCounter}]`).css("font-size",fontSize)
        $(`[data-id=f${frogCounter}]`).css("top", top )
        $(`[data-id=f${frogCounter}]`).css("left", left )
        }
        
    }
    removeGo = function(){
        $("#go").remove()
    }

    getSize = function(frog){
        return frog.size
    }

    getColor = function(frog){
        return frog.color
    }

    countDown = function(){

    }

    return { removeGo,
             addFrogDiv,
            }
}

const render = Renderer()
let frogs = frogies.getFrogs()
let frog = frogies.addFrog()
render.addFrogDiv(frogs)
render.removeGo()


