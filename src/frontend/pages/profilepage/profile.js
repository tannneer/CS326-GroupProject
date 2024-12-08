// Import User class
import { User } from '../authpage/user.js';

// Mock user data (or fetch this from your backend)
const userData = {
  email: 'johndoe@example.com',
  username: 'JohnDoe',
  password: 'securepassword',
};

// Create a user instance
const user = new User(userData.email, userData.username, userData.password);

// Update the DOM with user details
const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');

// Populate with actual data
const { email, username } = user.getDetails();
usernameElement.textContent = username;
emailElement.textContent = email;

// Redirect to create_page.html when the blue button is clicked
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
  location.href = '../createpage/createpage.html';
});

// Change profile picture
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
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
