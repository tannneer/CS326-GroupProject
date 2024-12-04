export function renderCalendar() { 

    //template render to be used for other components of calendar
    const baseCalendar = document.createElement('calendar');

    baseCalendar.innerHTML = `dynamically rendered calendar`; 

    return baseCalendar;

}