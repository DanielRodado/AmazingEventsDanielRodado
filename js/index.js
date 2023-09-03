const container = document.getElementById("containerCards");

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
                        <a href="./assets/pages/details.html" role="button" class="btn btn-submit"
                        >Details</a>
                    </div>
                </div>
            </div>
            `
};

function generateCard(events, add) {
    let template = "";
    for (let event of events) {
        template += createCard(event);
    };
    add.innerHTML = template;
};

generateCard(data.events, container);