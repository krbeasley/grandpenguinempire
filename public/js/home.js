import {getDesksObliterated, getEvents} from "./utilities/GoogleHelper.js";
import { upcomingEventCard } from "./components/ui.js";

// Desks Obliterated
const desksText = document.getElementById('desks_obliterated');
const desksData = await getDesksObliterated();

if (desksData.status === "success") {
    desksText.innerText = desksText.innerText + ' ' + desksData.data['statistic']
}

// Upcoming Events
const eventsContainer = document.getElementById('calendar_events_container');
const eventsData = await getEvents();

if (eventsData.status === "success") {
    eventsData.data.forEach((event) => {
        eventsContainer.appendChild(upcomingEventCard(event))
    })
}

console.log(desksData)
console.log(eventsData)