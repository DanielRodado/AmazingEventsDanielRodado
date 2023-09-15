export function createCard(event, page) {
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
                        <a href="${page.includes("index.html") ? `./assets/pages/details.html?key=${event._id}`:`./details.html?key=${event._id}`}" role="button" class="btn btn-submit"
                        >Details</a>
                    </div>
                </div>
            </div>
            `
};

export function generateCard(listData, referenceToAdd, page) {
    if (listData.length > 0) {
        let template = "";
        for (let event of listData) {
            template += createCard(event, page);
        };
        referenceToAdd.innerHTML = template;
    } else referenceToAdd.innerHTML = "<h4>No results found :(</h4>";
};

export function createCheckBox(value) {
    return `<div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value="${value}"
                    id="${value}">
                <label class="form-check-label" for="${value}">
                    ${value}
                </label>
            </div>
            `
};

export function generateCheck(arrayData) {
    let arrayCategories = new Set(arrayData.map(element => element.category));
    let template = "";
    for (let category of arrayCategories) {
        template += createCheckBox(category);
    };
    return template;
};

export function filterChecks(arrayOriginalData) {
    const checked = document.querySelectorAll("input[type=checkbox]:checked");
    let listNewData = [];
    if (checked.length > 0) {
        for (let checkBox of checked) {
            listNewData.push(...arrayOriginalData.filter(element => element.category === checkBox.value));
        };
    } else listNewData = arrayOriginalData;
    return listNewData;
};

export function filterSearch(arrayOriginalData, inputValue) {
    let filteredSearchData = arrayOriginalData;
    if (inputValue.length > 0) {
        filteredSearchData = arrayOriginalData.filter(element => element.name.toLowerCase() === inputValue.toLowerCase());
    };
    return filteredSearchData;
};

export function doubleFilter(arrayOriginalData, inputValue) {
    const listFilteredChecks = filterChecks(arrayOriginalData);
    const listFilteredSearch = filterSearch(listFilteredChecks, inputValue);
    return listFilteredSearch;
};

export function filterEventsUpComing(events, currentDate) {
    let eventsPast = events.filter(
        event => parseInt(event.date.slice(0, 4)) >= parseInt(currentDate.slice(0, 4)));
    return eventsPast;
};

export function filterEventsPast(events, currentDate) {
    let eventsPast = events.filter(
        event => parseInt(event.date.slice(0, 4)) < parseInt(currentDate.slice(0, 4)));
    return eventsPast;
};

export function createCardDetails(event) {
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