// BUTTON
// "button/computerbeep_12.mp3"
// 5 -- mouseover nav
// 15 
// 11
// 65 clickety soft, alt for 12?


// ACTION
// 13 de-deet
// 39 de-de-de-deeet -- result found
// 16 -- onscreen
// 17 -- comm open

const Events = {
    login: "action/computerbeep_16.mp3",
    keyPressed: "button/computerbeep_5.mp3",
    navMouseOver: "button/computerbeep_5.mp3",
    navPressed: "action/computerbeep_13.mp3",
    tableTabMouseOver: "button/computerbeep_5.mp3",
    tableTabPressed: "action/computerbeep_39.mp3",
}

function newSound(relName) {
    const fname = "./sounds/"+relName
    return new Howl({
        src: [fname],
    })
}

function getSound(relName) {
    var sound = Cache[relName]
    if (sound) { 
        return sound 
    }
    sound = newSound(relName)
    Cache[relName] = sound
    return sound
}

export function playSoundEvent(name) {
    const relName = Events[name]
    if (relName) {
        const sound = getSound(relName)
        if (sound) {
            const id = sound.play()
            return {sound, id}
        } else {
            console.log("getSound('"+relName+"') found no sound")
        }
    } else {
        console.log("No sound defined for",name)
    }
    return null
}

// Given a browser keyboard event, play a sound
// Event API doc: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
export function playKeyboardSound(event) {
    playSoundEvent("keyPressed")
    console.log(event)
      // console.log(String.fromCharCode(e.keyCode));
}
