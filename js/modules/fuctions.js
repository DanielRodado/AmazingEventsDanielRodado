export function createCard(event) {
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
                        <a href="./assets/pages/details.html?key=${event._id}" role="button" class="btn btn-submit"
                        >Details</a>
                    </div>
                </div>
            </div>
            `
};

export function generateCard(listData, referenceToAdd) {
    if (listData.length > 0) {
        let template = "";
        for (let event of listData) {
            template += createCard(event);
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