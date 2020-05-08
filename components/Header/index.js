// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerEntryPoint = document.querySelector('.header-container')

function Header() {
    const headerDiv = document.createElement('div')
    const dateSpan = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const temp = document.createElement('span')

    headerDiv.appendChild(dateSpan)
    headerDiv.appendChild(headerH1)
    headerDiv.appendChild(temp)

    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    temp.classList.add('temp')

    dateSpan.textContent = 'SMARCH 28, 2019'
    temp.textContent = '98°'

    return headerDiv
}

const head = Header()
headerEntryPoint.appendChild(head)