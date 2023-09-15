import {filterEventsPast, generateCard, generateCheck, doubleFilter} from "./modules/fuctions.js"

const $containerCards = document.getElementById("container-cards-past-events");
const $containerCheck = document.getElementById("check-container-past");
const $search = document.querySelector(".form-control--mod");
const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";
const locationHref = location.href;

let listOfEventsFiltered;
fetch(URL_API)
    .then(response => response.json())
    .then(({currentDate, events}) => {
        listOfEventsFiltered = filterEventsPast(events, currentDate);
        generateCard(listOfEventsFiltered, $containerCards, locationHref);
        $containerCheck.innerHTML = generateCheck(listOfEventsFiltered);

    })
    .catch(error => console.log(error));


$containerCheck.addEventListener("change", () => {
    const listfilteredCheks = doubleFilter(listOfEventsFiltered, $search.value);
    generateCard(listfilteredCheks, $containerCards, locationHref);
});

$search.addEventListener("input", () => {
    const listfilteredSearch = doubleFilter(listOfEventsFiltered, $search.value);
    generateCard(listfilteredSearch, $containerCards, locationHref);
});