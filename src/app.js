import { renderAuthPage } from "./frontend/pages/authpage/signup.js";
import { renderProfile } from "./frontend/pages/profilepage/profile.js"; 
import { renderCreateObj } from "./frontend/pages/createpage/createPage.js"; 
import { renderAnalyics } from "./frontend/pages/analyticspage/analyticsPage.js"; 
import { renderAllCalendarComponents } from "./frontend/pages/calendarpage/calendarPage.js";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");

  // Define routes for login and signup
  const routes = {
    "/": () => loadPage("src/index.html"),
  "/login": () => renderAuthPage("app", "login"),
  "/register": () => renderAuthPage("app", "register"),
   "/profile": renderProfile, 
   "/create-objectives": renderCreateObj,
   "/analytics": renderAnalyics,
   "/calendar": renderAllCalendarComponents,
  }; 

  function loadPage(pageUrl) {
    fetch(pageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load page.");
        }
        return response.text();
      })
      .then((html) => {
        const appElement = document.getElementById("app");
        appElement.innerHTML = html;
      })
  }
  
  // Function to dynamically fetch and load HTML pages
  
  // Function to navigate and render a specific page
  const navigateTo = (path) => {
    history.pushState({}, "", path); // Update the browser URL
    handleRoute(path); // Render the corresponding page
  };

  // Function to handle the current route
  const handleRoute = (path) => {
    const routeHandler = routes[path];
    if (routeHandler) {
      routeHandler(); // Call the render function for the current route
    } else {
      console.error(`No handler found for path: ${path}`);
      alert("Page not found.");
      history.replaceState({}, "", "/");
      handleRoute("/"); // Redirect to home or default route
    }
  };

  // Add click listeners for navigation
  // document.body.addEventListener("click", (e) => {
  //   if (e.target.matches('[href^="/"]')) {
  //     e.preventDefault(); // Prevent full page reload
  //     navigateTo(e.target.getAttribute("href")); // Navigate dynamically
  //   }
  // }); 

  document.body.addEventListener("click", (e) => {
    // Check if the clicked element is an anchor tag or inside an anchor
    const anchor = e.target.closest('a[href^="/"]');
    if (anchor) {
      e.preventDefault(); // Prevent full page reload
      navigateTo(anchor.getAttribute("href")); // Navigate dynamically
    }
  });

  // Handle browser back/forward navigation
  window.addEventListener("popstate", () => {
    handleRoute(window.location.pathname);
  });

  // Handle the initial route on page load
  handleRoute(window.location.pathname);
});

