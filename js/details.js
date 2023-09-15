import { createCardDetails } from "./modules/fuctions.js";

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