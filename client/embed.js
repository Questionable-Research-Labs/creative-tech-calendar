import { loadCalendar } from "./calender.js";

// Get settings from URL
const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams)

document.addEventListener('DOMContentLoaded', function () {
    loadCalendar()
});