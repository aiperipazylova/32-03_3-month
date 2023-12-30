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

let count = 1

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
    if (count < 200) {
        count++
        fetchCard(count)
    } else {
        count = 1
        fetchCard(count)
    }
}

btnPrev.onclick = () => {
    if (count > 1) {
        count--
        fetchCard(count)
    } else {
        count = 200
        fetchCard(count)
    }
}

fetchCard(count)

// WEATHER

const cityNameInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'



// http://api.openweathermap.org/data/2.5/weather

//query = запрос, query параметры сохдаются бекендами индивидуально (бывают разные) например ?q=
// допустим weather это большой json внутри которого все данные по погоде, их очень много и чтобы получать точные данные конкретного места нужно  query параметры при помощи которых мы можем оптимизировать наши запросы. Это делается бекендами. Он пишет нам в документации инструкцию как использовать API и пареметры.
//query параметры попадают в payload в network. Payload появляется в 2 случаях: 1) когда пишем query параметры и 2) если отправляем post запрос

const citySearch = () => {
    cityNameInput.addEventListener('input', (event) => {
        fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
        // данная API (ссылка) состоит из 6 частей: 1) протокол - http://  2) доменное имя - api.openweathermap.org
        // 3)и 4) Расположение пути и где хранятся данные - data/2.5/weather 5) query параметр - ?q=Bishkek 
        // 6) appid (API key) - e417df62e04d3b1b111abeab19cea714
            .then (response => response.json())
            .then (data => {
                city.innerHTML = data.name ? data.name : 'Город не найден...'
                temp.innerHTML = data?.main?.temp ?Math.round(data?.main?.temp - 273.15) + '&deg;C' : '; )'
            })
    })
}

citySearch()
