// import { renderAuthPage } from "./frontend/pages/authpage/signup.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const loginBtn = document.getElementById("login-btn");
//   const signupBtn = document.getElementById("signup-btn");

//   if (loginBtn) {
//     loginBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       renderAuthPage("app", "login");
//     });
//   }

//   if (signupBtn) {
//     signupBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       renderAuthPage("app", "signup");
//     });
//   }
// });

import { renderAuthPage } from "./frontend/pages/authpage/signup.js"; // Import rendering function for login/signup pages

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");

  // Define routes for login and signup
  const routes = {
    "/login": () => renderAuthPage("app", "login"),
    "/signup": () => renderAuthPage("app", "signup"),
  };

  // Navigate to a specific path and render the associated page
  const navigateTo = (path) => {
    history.pushState({}, "", path); // Update the URL
    handleRoute(path); // Render the appropriate page
  };

  // Handle route rendering
  const handleRoute = (path) => {
    const routeHandler = routes[path];
    if (routeHandler) {
      routeHandler(); // Render login or signup page
    } else {
      console.log("Let the static index.html handle the current path.");
    }
  };

  // Event listener for navigation links
  document.body.addEventListener("click", (e) => {
    if (e.target.matches('[href^="/"]')) {
      e.preventDefault(); // Prevent full page reload
      navigateTo(e.target.getAttribute("href")); // Navigate dynamically
    }
  });

  // Listen for browser back/forward navigation
  window.addEventListener("popstate", () => {
    handleRoute(window.location.pathname);
  });

  // Handle initial route when the page loads
  handleRoute(window.location.pathname);
});
