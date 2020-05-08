// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

cardsEntryPoint = document.querySelector('.cards-container')

function cardMaker(newCardAttrs) {

    const {authorName, authorPhoto, headline} = newCardAttrs

    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const author = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardAuthorName = document.createElement('span')

    card.appendChild(cardHeadline)
    card.appendChild(author)
    author.appendChild(cardImgContainer)
    cardImgContainer.appendChild(cardImg)
    author.appendChild(cardAuthorName)

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    author.classList.add('author')
    cardImgContainer.classList.add('img-container')

    cardHeadline.textContent = headline
    cardImg.src = authorPhoto
    cardAuthorName.textContent = authorName

    return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles/')
    .then(response => {
        let cardData = Object.values(response.data.articles)
        cardData.forEach(topic => {
            console.log(topic)
            topic.forEach(finalData => {
                console.log(finalData)
                const newCard = cardMaker(finalData)
                cardsEntryPoint.appendChild(newCard)
            })
        })
        console.log(Object.values(cardData))
    })