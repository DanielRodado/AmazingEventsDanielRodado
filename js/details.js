const $parameter = location.search;
const searchParameter = new URLSearchParams($parameter);
const idDetail = parseInt(searchParameter.get("key"));
const $containerCard = document.querySelector(".card-container");
const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";

fetch(URL_API)
.then(response => response.json())
.then(({events}) => {
    const eventDetail = events.find(element => element._id == idDetail);
    $containerCard.innerHTML = createCardDetails(eventDetail);
    })
    .catch(error => console.log(error));

function createCardDetails(event) {
    return `
    <article class="article-details d-flex flex-column flex-md-row gap-3">
        <img src=${event.image}>
        <div class="article-description flex-lg-grow-1 d-flex flex-column">
            <h3 class="text-center">${event.name}</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent"><b>Date:</b> ${event.date}</li>
                <li class="list-group-item bg-transparent"> ${event.description}</li>
                <li class="list-group-item bg-transparent"><b>Category:</b> ${event.category}</li>
                <li class="list-group-item bg-transparent"><b>Place:</b> ${event.place}</li>
                <li class="list-group-item bg-transparent"><b>Capacity:</b> ${event.capacity}</li>
                ${event.hasOwnProperty("assistance") ?
                `<li class="list-group-item bg-transparent"><b>Assistance:</b> ${event.assistance}</li>`:""}
                <li class="list-group-item bg-transparent"><b>Price:</b> $${event.price} USD</li>
            </ul>
        </div>
    </article>
    `;
};
