const parameter = location.search;

const searchParameter = new URLSearchParams(parameter);

const idDetail = searchParameter.get("key");

const eventDetail = data.events.find((event) => event._id === idDetail);

const containerCard = document.querySelector(".card-container");

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

containerCard.innerHTML = createCardDetails(eventDetail);