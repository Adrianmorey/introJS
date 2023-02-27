const containerCards = document.getElementById("containerCards")
let generateCards = pushCards(data.events)
containerCards.innerHTML = generateCards



function pushCards(arrayData) {
    let newCards = '';
    for (const event of arrayData) {
        if (event.date < data.currentDate) {
            newCards += `<div class="card" style = "width: 18rem;" >
                             <img src="${event.image}" class="card-img-top" alt="${event.alt}">
                            <div class="card-body">
                                <h5 class="card-title">${event.name}</h5>
                                <p class="card-text">${event.description}.</p>
                                <p class="card-price">Price $ ${event.price}.</p>
                                <a href="/details.html" class="btn btn-primary" id="buttonInfo"> More info </a>
                            </div>
                     </div>`
        }
    }
    return newCards
}
