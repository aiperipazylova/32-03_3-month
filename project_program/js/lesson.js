// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [27593]\d{2} \d{2}-\d{2}-\d{2}$/
 
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}



//TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach (tabCard => {
            tabCard.style.display = 'none'
    })
    tabs.forEach( tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0) => {
     tabContentBlocks[tabIndex].style.display = 'block'
     tabs[tabIndex].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
        if (event.target.classList.contains('tab_content_item')) {
            tabs.forEach ((tab, tabIndex) => {
                if (event.target === tab) {
                    hideTabContent()
                    showTabContent(tabIndex)
                }
            })
        }
}

// HOMEWORK 3 (PART 1)

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentBlocks.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

autoSlider()


// CONVERTER / //DRY - don`t repeat yourself

// const usd = document.querySelector('#usd')
// const som = document.querySelector('#som')

// Решение - 1

// const converter = (element, targetElement, current) => {
//         element.oninput = () => {
//             const xhr = new XMLHttpRequest()
//             xhr.open('GET', '../data/converter.json')
//             xhr.setRequestHeader('Content-type', 'application/json')
//             xhr.send()

//             xhr.onload = () => {
//                 const data = JSON.parse(xhr.response)

//                 switch (current) {
//                     case "som":
//                         targetElement.value = (element.value / data.usd).toFixed(2)
//                         break
//                     case "usd":
//                         targetElement.value = (element.value * data.usd).toFixed(2)
//                         break
//                     default:
//                         break
//                 }

//                 element.value === '' && (targetElement.value = '')

//                 // element.value === '' ? targetElement.value = '' : ''

//                 // if (element.value === '') {
//                 //     targetElement.value = ''
//                 // }
//             }
//         }
// }

// converter(som, usd, 'som')
// converter(usd, som, 'usd')

// Решение - 2

// som.addEventListener('input', () => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', '../data/converter.json')
//         xhr.setRequestHeader('Content-type', 'application/json')
//         xhr.send()

//         xhr.addEventListener('load', () => {
//             const data = JSON.parse(xhr.response)
//             usd.value = (som.value / data.usd).toFixed(2)
//         })
// })

// usd.addEventListener('input', () => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', '../data/converter.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()

//     xhr.addEventListener('load', () => {
//         const data = JSON.parse(xhr.response)
//         som.value = (usd.value * data.usd).toFixed(2)
//     })
// })



const usd = document.querySelector('#usd')
const som = document.querySelector('#som')
const euro = document.querySelector('#euro')

const converter = (element, targetElement1, targetElement2, current) => {
        element.oninput = () => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', '../data/converter.json')
            xhr.setRequestHeader('Content-type', 'application/json')
            xhr.send()

            xhr.onload = () => {
                const data = JSON.parse(xhr.response)

                switch (current) {
                    case "som":
                        targetElement1.value = (element.value * data.usd).toFixed(2)
                        targetElement2.value = (element.value * data.euro).toFixed(2)
                        break
                    case "usd":
                        targetElement1.value = (element.value * data.usd).toFixed(2)
                        targetElement2.value = (element.value * data.usd / data.euro).toFixed(2)
                        break
                    case "euro":
                        targetElement1.value = (element.value * data.euro).toFixed(2)
                        targetElement2.value = (element.value * data.euro / data.usd).toFixed(2)
                        break
                    default:
                        break
                }
    
                element.value === '' && (targetElement1.value = targetElement2.value = '')
            }
        }
    }

converter(som, usd, euro, 'som')
converter(usd, som, euro, 'usd')
converter(euro, som, usd, 'euro')

// CARD SWITCHER

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')

let countCard = 1

const fetchCard = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(data => {
                card.innerHTML = `
                    <p>${data.title}</p>
                    <p style = "color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                    <span>${data.id}</span>
                `
            })
}

btnNext.onclick = () => {
    count < 200 ? count++ : count = 1
    fetchCard(count)
}

btnPrev.onclick = () => {
    count > 1 ? count-- : count = 200
    fetchCard(count)
}

fetchCard(count)
