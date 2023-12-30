// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modal.style.display = 'none'
  document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    // event.target === modal && closeModal()
    if (event.target = modal) {
        closeModal()
    }
}


// HOMEWORK 3 (PART 2)

const checkIfScrolledToBottom = () => {
  const scrollPosition = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.body.offsetHeight

  if ((scrollPosition + windowHeight) >= documentHeight) {
      openModal()
      window.removeEventListener('scroll', checkIfScrolledToBottom)
  }
}

window.addEventListener('scroll', checkIfScrolledToBottom)


// HOMEWORK 3 (PART 3)

const showModal = () => {
  const modal = document.querySelector('.modal')
  modal.style.display = 'block'
}

setTimeout(showModal, 10000)


// POST DATA

// нужен настоящий сервер, а это стоит денег
// mamp = Скачать Mamp и написать POST запрос 
// Скачать можно тут => MAMP
// попробовать запуститиmь свой сервер 
// для настройки порта необходимо в верхнем левом углу нажать на надпись MAMP и перейти в preferences. После чего выбираете раздел Ports. Там находиться кнопка MAMO default. Нажмете на нее и ваш порт будет :8888
//localhost:8888 => запускается проект через mamp

const form = document.querySelector('form')

const postData = (url, data) => {
    const response = fetch (url, {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: data
    })
    return response
}

const bindPostData = (formElement) => {
    formElement.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(formElement)
        const obj = {}
        formData.forEach((item, index) => {
            obj[index] = item
        })
        const json = JSON.stringify(obj)

        if (window.location.pathname === '/project_program/index.html') {
        postData('server.php', json)
    } else {
        postData('../server.php', json)
    }
  }
}
console.log(window.location.pathname)

bindPostData(form)

//Задача 2
// const postData = (formElement) => {
//     formElement.addEventListener('submit', (event) => {
//         event.preventDefault()

//         const request = new XMLHttpRequest()
//         request.open("POST", "server.php")
//         request.setRequestHeader('Content-type', 'application/json')

//         const formData = new FormData(formElement)
//         const obj = {}
//         formData.forEach((item, index) => {
//             obj[index] = item
//         })

//         const json = JSON.stringify(obj)

//         request.send(json)
//     })

// }

// postData(form)
