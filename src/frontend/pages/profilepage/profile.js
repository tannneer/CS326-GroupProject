//import { renderCreateObj } from "../createpage/createPage";

// Mock user data (this can be replaced with real backend data if available)
export function renderProfile() {
  // Dynamically load the CSS for the profile page
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "frontend/pages/profilepage/profile.css"; 
  document.head.appendChild(link);

<<<<<<< HEAD
const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');

const response = await fetch(`/user:${emailElement}'`, { 
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  
const data = await response.json(); 

const { dUsername, dEmail } = data; 
//PUT THE DATA IN THE PAGE 

const greeting = document.getElementById('username');
greeting.innerHTML = dUsername; 

const mEmail = document.getElementById('email'); 
mEmail.innerHTML = dEmail; 


// Update the DOM with user details


// Populate the DOM with actual user data
const { email, username } = userData;
usernameElement.textContent = username;
emailElement.textContent = email;
=======
  // Add HTML content for the profile page
  const app = document.getElementById("app");
  app.innerHTML = ` 
   <nav class="navbar">
    <div class="navbar-left">
      <a href="/create-objectives" class="nav-link">Create Objectives</a>
      <a href="/calendar" class="nav-link">Calendar</a>
      <a href="/analytics" class="nav-link">Analytics</a>
    </div>
    <div class="navbar-right">
      <a href="/profile" class="profile-btn">Profile</a>
    </div>
  </nav>
    <div class="container">
      <!-- Logout Button -->
      <button class="logout-button" href="/">
        <span>Log Out</span>
      </button>

      <!-- Profile Picture Section -->
      <div class="profile-pic-container">
        <img class="profile-pic" src="https://via.placeholder.com/166x153" alt="Profile Picture">
        <div class="camera-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 5c1.1 0 2 .9 2 2H9.9c0-1.1.9-2 2-2zm7 2.2v10.6c0 1.3-1 2.2-2.2 2.2H7.2C5.9 20 5 19 5 17.8V7.2C5 6 6 5 7.2 5h1.1l.9-1c.4-.4 1-.6 1.6-.6h4c.6 0 1.2.2 1.6.6l.9 1h1.1C18 5 19 6 19 7.2zM7 16c.5 0 1 .4 1 1s-.5 1-1 1-1-.4-1-1 .5-1 1-1zm5-7c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div>
      </div>
>>>>>>> main

      <!-- Card Section -->
      <div class="card">
        <h1 class="greeting">Hello, <span id="username">Username</span></h1>
        <p class="email-label">Email: <span id="email">user@example.com</span></p>
        <p class="instructions">Click the button to start planning</p>
        <a href="/create-objectives" id="create-btn" class="btn"> <span>Go to <br> Planning</span> </a>
      </div>
    </div>
  `;


  const userData = {
    email: 'johndoe@example.com',
    username: 'JohnDoe',
    password: 'securepassword',
  };
  
  // Update the DOM with user details
  const usernameElement = document.getElementById('username');
  const emailElement = document.getElementById('email');
  
  // Populate the DOM with actual user data
  const { email, username } = userData;
  usernameElement.textContent = username;
  emailElement.textContent = email;
  
  
  // document.addEventListener('DOMContentLoaded', () => {
  //   // Attach click event to the CTA button
  //   const ctaButton = document.querySelector('.cta-button');
  //   if (ctaButton) {
  //       ctaButton.addEventListener('click', () => {
  //           location.href = '/create-objectives';
  //       });
  //   } else {
  //       console.error('CTA button not found.');
  //   }
  // });
  
  // Redirect to create_page.html when the blue button is clicked
  // const ctaButton = document.querySelector('.cta-button');
  // ctaButton.addEventListener('click', () => {
  //   location.href = '/create-objectives';
  // }); 

  // Change profile picture functionality
  const profilePic = document.querySelector('.profile-pic');
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  
  document.querySelector('.camera-icon').addEventListener('click', () => {
    fileInput.click();
  });
  
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name); // Log file name
      const reader = new FileReader();
      reader.onload = (e) => {
        profilePic.src = e.target.result;
        console.log('Image loaded:', e.target.result); // Log image data
      };
      reader.readAsDataURL(file);
    } else {
      console.log('No file selected');
    }
  });
  
  //Log Out functionality
  const logoutButton = document.querySelector('.logout-button');
  logoutButton.addEventListener('click', () => {
    // Redirect to the homepage
    location.href = '/'; 
  }); 

}