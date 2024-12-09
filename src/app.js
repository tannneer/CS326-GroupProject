
// import { renderAuthPage } from "./frontend/pages/authpage/signup.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const appElement = document.getElementById("app");

//   // Define routes for login and signup
//   const routes = {
//     "/login": () => renderAuthPage("app", "login"),
//     "/register": () => renderAuthPage("app", "register"),
//   };

//   // Function to navigate and render a specific page
//   const navigateTo = (path) => {
//     history.pushState({}, "", path); // Update the browser URL
//     handleRoute(path); // Render the corresponding page
//   };

//   // Function to handle the current route
//   const handleRoute = (path) => {
//     const routeHandler = routes[path];
//     if (routeHandler) {
//       routeHandler(); // Call the render function for the current route
//     } else {
//       console.log("No handler found for:", path);
//     }
//   };

//   // Add click listeners for navigation
//   document.body.addEventListener("click", (e) => {
//     if (e.target.matches('[href^="/"]')) {
//       e.preventDefault(); // Prevent full page reload
//       navigateTo(e.target.getAttribute("href")); // Navigate dynamically
//     }
//   });

//   // Handle browser back/forward navigation
//   window.addEventListener("popstate", () => {
//     handleRoute(window.location.pathname);
//   });

//   // Handle the initial route on page load
//   handleRoute(window.location.pathname);
// }); 


import { renderAuthPage } from "./frontend/pages/authpage/signup.js";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");

  // Define routes for login and signup
  const routes = {
    "/login": () => renderAuthPage("app", "login"),
    "/register": () => renderAuthPage("app", "register"),
  };

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
      // Redirect to the root (/) and let the frontend take control
      history.replaceState({}, "", "/");
      handleRoute("/"); // Ensure the homepage or default rendering happens
    }
  };

  // Add click listeners for navigation
  document.body.addEventListener("click", (e) => {
    if (e.target.matches('[href^="/"]')) {
      e.preventDefault(); // Prevent full page reload
      navigateTo(e.target.getAttribute("href")); // Navigate dynamically
    }
  });

  // Handle browser back/forward navigation
  window.addEventListener("popstate", () => {
    handleRoute(window.location.pathname);
  });

  // Handle the initial route on page load
  handleRoute(window.location.pathname);
});

