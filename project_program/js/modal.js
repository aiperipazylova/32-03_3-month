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
    event.target === modal && closeModal()
    // if (event.target = modal) {
    //     closeModal()
    // }
}


// HOMEWORK 3 (PART 2)

const checkIfScrolledToBottom = () => {
  const scrollPosition = window.scrollY;
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
