"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var priorityForm = document.getElementById("priority-form");
  var priorityList = document.getElementById("priority-list");
  var calendar = document.getElementById("calendar");
  var priorities = []; // Function to add a priority

  priorityForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("priority-name").value;
    var dueDate = document.getElementById("due-date").value;
    var level = document.getElementById("priority-level").value;
    var priority = {
      name: name,
      dueDate: dueDate,
      level: level
    };
    priorities.push(priority);
    displayPriorities();
    displayCalendar();
    priorityForm.reset();
  }); // Function to display the list of priorities

  function displayPriorities() {
    priorityList.innerHTML = "<h2>Priority List</h2>";
    priorities.forEach(function (priority) {
      var item = document.createElement("div");
      item.className = "priority-item";
      item.dataset.level = priority.level;
      item.innerHTML = "<strong>".concat(priority.name, "</strong> - Due: ").concat(priority.dueDate, " - Level: ").concat(priority.level);
      priorityList.appendChild(item);
    });
  } // Function to display priorities on a simple calendar


  function displayCalendar() {
    calendar.innerHTML = "<h2>Calendar</h2>";
    var calendarEntries = priorities.map(function (priority) {
      var entry = document.createElement("div");
      entry.className = "calendar-entry";
      entry.dataset.level = priority.level;
      entry.textContent = "".concat(priority.dueDate, ": ").concat(priority.name, " (").concat(priority.level, ")");
      return entry;
    }); // Append entries to the calendar section

    calendarEntries.forEach(function (entry) {
      calendar.appendChild(entry);
    });
  }
});
//# sourceMappingURL=prioritiespage.dev.js.map
