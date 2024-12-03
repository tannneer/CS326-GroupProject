document.addEventListener("DOMContentLoaded", () => {
    const priorityForm = document.getElementById("priority-form");
    const priorityList = document.getElementById("priority-list");
    const calendar = document.getElementById("calendar");
  
    const priorities = [];
  
    // Function to add a priority
    priorityForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const name = document.getElementById("priority-name").value;
      const dueDate = document.getElementById("due-date").value;
      const level = document.getElementById("priority-level").value;
  
      const priority = { name, dueDate, level };
      priorities.push(priority);
      
      displayPriorities();
      displayCalendar();
      
      priorityForm.reset();
    });
  
    // Function to display the list of priorities
    function displayPriorities() {
      priorityList.innerHTML = "<h2>Priority List</h2>";
      priorities.forEach((priority) => {
        const item = document.createElement("div");
        item.className = "priority-item";
        item.dataset.level = priority.level;
        item.innerHTML = `<strong>${priority.name}</strong> - Due: ${priority.dueDate} - Level: ${priority.level}`;
        priorityList.appendChild(item);
      });
    }
  
    // Function to display priorities on a simple calendar
    function displayCalendar() {
      calendar.innerHTML = "<h2>Calendar</h2>";
      const calendarEntries = priorities.map((priority) => {
        const entry = document.createElement("div");
        entry.className = "calendar-entry";
        entry.dataset.level = priority.level;
        entry.textContent = `${priority.dueDate}: ${priority.name} (${priority.level})`;
        return entry;
      });
  
      // Append entries to the calendar section
      calendarEntries.forEach((entry) => {
        calendar.appendChild(entry);
      });
    }
  });