import { loadCalendar } from "./calender.js";

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}


// Get settings from URL
const urlParams = new URLSearchParams(window.location.search);
for (let p of urlParams) {
    console.log(p);
  }
if (urlParams.get("theme") === "dark") {
    console.log("Test")
    addStyle(`
    body {
        background-color: #272727;
        color: white;
    }
  `);
}

document.addEventListener('DOMContentLoaded', function () {
    loadCalendar()
});