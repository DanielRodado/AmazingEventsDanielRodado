const containerCards = document.getElementById("containerCardsUpComingEvents");

function createCard(event) {
    return `<div class="card card--mod">
                <img
                    src=${event.image}
                    class="img-card"
                    alt=${event.category}>
                <div class="card-body card-body--mod">
                    <h5 class="card-title text-center">
                        ${event.name}
                    </h5>
                    <p class="card-text text-center">
                        ${event.description}
                    </p>
                    <div
                        class="card-footer d-flex justify-content-between align-items-center">
                        <p class="card-text mb-0">$${event.price} USD</p>
                        <a href="./details.html" role="button" class="btn btn-submit"
                        >Details</a>
                    </div>
                </div>
            </div>
            `;
}

function filterEvents(events, currentDate) {
    let eventsUpComing = [];
    for (let event of events) {
        if (
            parseInt(event.date.slice(0, 4)) >=
            parseInt(currentDate.slice(0, 4))
        )
            eventsUpComing.push(event);
    }
    return eventsUpComing;
}

function generateCard(events, add) {
    let template = "";
    for (let event of events) {
        template += createCard(event);
    }
    add.innerHTML = template;
}

const eventsUpComing = filterEvents(data.events, data.currentDate);

generateCard(eventsUpComing, containerCards);
