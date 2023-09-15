import { generateCard, generateCheck, doubleFilter } from "./modules/fuctions.js"

const $containerCards = document.getElementById("container-cards");
const $containerCheck = document.getElementById("check-container");
const $search = document.querySelector(".form-control--mod");
const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";

let listOfEvenets;
fetch(URL_API)
    .then(response => response.json())
    .then(({events}) => {
        listOfEvenets = [...events];
        generateCard(events, $containerCards);
        $containerCheck.innerHTML = generateCheck(events);
    })
    .catch(error => console.log(error));

$containerCheck.addEventListener("change", () => {
    const listfilteredCheks = doubleFilter(listOfEvenets, $search.value);
    generateCard(listfilteredCheks, $containerCards);
});

$search.addEventListener("input", () => {
    const listfilteredSearch = doubleFilter(listOfEvenets, $search.value);
    generateCard(listfilteredSearch, $containerCards);
});
