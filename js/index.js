import { generateCard, generateCheck, doubleFilter } from "./modules/fuctions.js"

const $containerCards = document.getElementById("container-cards");
const $containerCheck = document.getElementById("check-container");
const $search = document.querySelector(".form-control--mod");
const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";
const locationHref = location.href;

let listOfEvents;
fetch(URL_API)
    .then(response => response.json())
    .then(({events}) => {
        listOfEvents = [...events];
        generateCard(events, $containerCards, locationHref);
        $containerCheck.innerHTML = generateCheck(events);
    })
    .catch(error => console.log(error));

$containerCheck.addEventListener("change", () => {
    const listfilteredCheks = doubleFilter(listOfEvents, $search.value);
    generateCard(listfilteredCheks, $containerCards, locationHref);
});

$search.addEventListener("input", () => {
    const listfilteredSearch = doubleFilter(listOfEvents, $search.value);
    generateCard(listfilteredSearch, $containerCards, locationHref);
});
