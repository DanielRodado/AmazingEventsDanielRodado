import {
    filterEventsPast,
    filterEventsUpComing,
    calculateAttendance,
    calculateHighestCapacity,
    calculateValuesOfTable,
    generateStatisticsData,
    generateEventsStatisticsData
} from "./modules/fuctions.js";

const tBobyEventsStatistics = document.getElementById("tbody-tr");
const tBodyUpComingEventsStatistics = document.getElementById("tbody-table-up-coming");
const tBodyPastEventsStatistics = document.getElementById("tbody-table-past")
const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";

fetch(URL_API)
    .then((resolve) => resolve.json())
    .then(({ events, currentDate }) => {
        const listEventsPast = filterEventsPast(events, currentDate);
        const listEventsUpComing = filterEventsUpComing(events, currentDate);

        const eventHighestAttendance = calculateAttendance(listEventsPast, true);
        const eventLowerAttendance = calculateAttendance(listEventsPast);
        const eventHighestCapacity = calculateHighestCapacity([...events]);

        const statisticsUpComing = calculateValuesOfTable(listEventsUpComing, true);
        const statisticsPastEvents = calculateValuesOfTable(listEventsPast);

        tBobyEventsStatistics.innerHTML += generateStatisticsData(
            eventHighestAttendance,
            eventLowerAttendance,
            eventHighestCapacity);
    
        tBodyUpComingEventsStatistics.innerHTML += generateEventsStatisticsData(statisticsUpComing);
        tBodyPastEventsStatistics.innerHTML += generateEventsStatisticsData(statisticsPastEvents)

    })
    .catch((err) => console.error(err));
