//Homework 4 (Part 1)

const wrapperPeoples = document.querySelector('.wrapper')

const getCards = () => {
    const request = new XMLHttpRequest()
    request.open('GET','peoples.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.onload = () => {
        const peoples = JSON.parse(request.response)

        peoples.forEach((person) => {
            const personBlock = document.createElement('div')
            personBlock.classList.add('personBlock')

            personBlock.innerHTML = `
              <div class="personPhoto">
                <img src="${person.photo}" alt="">
              </div>
              <p>name:${person.name}</p>
              <span>age:${person.age}</span>
            `

            wrapperPeoples.append(personBlock)
        })
    }
}

getCards()

//Homework 4 (Part 2)

const getMarvels = () => {
  const request = new XMLHttpRequest()
  request.open('GET','marvels.json')
  request.setRequestHeader('Content-type', 'application/json')
  request.send()

  request.onload = () => {
      console.log(request.response)
     }
}

getMarvels()