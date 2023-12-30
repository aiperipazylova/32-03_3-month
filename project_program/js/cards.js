// const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20'

// const cards = document.querySelector('.cards')

const getCards = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (e) {
      console.log(e)
    }
 }

getCards(URL)


const renderCards = async (url) => {
  const cards = document.querySelector('.cards')
  const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20';
  try {
    const posts = await getCards(URL);

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';

      const title = document.createElement('h2');
      title.textContent = post.title;

      const description = document.createElement('p');
      description.textContent = post.body;

      card.appendChild(title);
      card.appendChild(description);
      cards.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}

window.onload = renderCards;