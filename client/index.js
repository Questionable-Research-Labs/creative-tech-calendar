import "tailwindcss/tailwind.css"
import "./main.css";
import { loadCalendar } from "./calender.js";


document.addEventListener('DOMContentLoaded', function () {
    loadCalendar()
});