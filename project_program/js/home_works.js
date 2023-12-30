// HOMEWORK 1 (PART 1)

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._-]+@gmail\.com$/
 
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Gmail is valid!'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Invalid gmail. Please enter a valid Gmail address.'
        gmailResult.style.color = 'red'
    }
}


// HOMEWORK 1 (PART 2)

// const parentBlock = document.querySelector('.parent_block')
// const childBlock = document.querySelector('.child_block')


// let currentPosition = 0
// let moveDistance = 5
// let stopPosition = 448

// function moveRight() {
//     currentPosition += moveDistance;
//     childBlock.style.left = `${currentPosition}px`

//     if (currentPosition < stopPosition) {
//         requestAnimationFrame(moveRight)
//     }
// }

// moveRight()


// HOMEWORK 1/2 - 'MOVE BLOCK'

const childBlock = document.querySelector('.child_block')

const parentBlockWidth = 449
const moveSpeedChildBlock = 1
let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < parentBlockWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
    } else if (positionX >= parentBlockWidth && positionY < parentBlockWidth) {
        positionY++
        childBlock.style.top = `${positionY}px`
    } else if (positionY >= parentBlockWidth && positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
    }

    setTimeout(moveBlock, moveSpeedChildBlock)

}

moveBlock()



// HOMEWORK 2

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

const seconds = document.querySelector('#seconds')

let counterValue = 0
let intervalId

    const start = () => {
        clearInterval(intervalId)
        intervalId = setInterval(() => {
            counterValue++
            seconds.innerHTML = counterValue
        }, 1000)
    }

    const stop = () => {
        clearInterval(intervalId)
    }

    const reset = () => {
        counterValue = 0
        seconds.innerHTML = counterValue
        clearInterval(intervalId)
    }
