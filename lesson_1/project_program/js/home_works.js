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

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')


let currentPosition = 0
let moveDistance = 5
let stopPosition = 448

function moveRight() {
    currentPosition += moveDistance;
    childBlock.style.left = `${currentPosition}px`

    if (currentPosition < stopPosition) {
        requestAnimationFrame(moveRight)
    }
}

moveRight()
