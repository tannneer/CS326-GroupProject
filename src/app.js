import { renderAllAnalyticsComponents } from "../frontend/pages/analyticspage.js";
import { renderAllCalendarComponents } from "../frontend/pages/calendarpage/calendarPage.js";
import { renderAllCreateComponents } from "../frontend/pages/createpage/createPage.js";

//NAVIGATION:
document.addEventListener("DOMContentLoaded", () => {
    function navigate(viewId) {
      // Hide all views
      document.querySelectorAll(".view").forEach((view) => {
        view.style.display = "none";
      });
  
      // Show the requested view
      document.getElementById(viewId).style.display = "block";
    }
  
    document
      .getElementById("createNavButton")
      .addEventListener("click", () => navigate("createView"));
    document
      .getElementById("calendarNavButton")
      .addEventListener("click", () => navigate("calenderView"));
    document
      .getElementById("analyticsNavButton")
      .addEventListener("click", () => navigate("analyticsView"));
  
    // Initialize with the create view
    navigate("createNavButton");

    document.querySelectorAll(".image-container img").forEach((img) => {
      img.addEventListener("click", function () {
        const parent = this.parentNode;
        parent.insertBefore(this, parent.firstChild); // Move the clicked image to the beginning
      });
    });
  
  });

  //dynamically rendering: 


  /*
  document.getElementById('createView').appendChild(renderCreate());
  document.getElementById('calenderView').appendChild(renderCalendar());
  document.getElementById('analyticsView').appendChild(renderAnalytics());
  */
 
 document.getElementById('createView').appendChild(renderAllCreateComponents());
  //document.getElementById('calenderView').appendChild(renderAllCalendarComponents());
 // document.getElementById('analyticsView').appendChild(renderAllAnalyticsComponents());

  

  