import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export function loadCalendar() {
	var calendarEl = document.getElementById('calendar');

	var calendar = new Calendar(calendarEl, {
		plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin, bootstrapPlugin],
		themeSystem: 'bootstrap',
		googleCalendarApiKey: "AIzaSyDk2J-pFA7BUbDdD2Hm3nCnLFvaGl_UIvA",
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		navLinks: true, // can click day/week names to navigate views
		editable: true,
		dayMaxEvents: true, // allow "more" link when too many events
		events: {
			googleCalendarId: "events@questionable.co.nz"
		}
	});
	calendar.render();
}