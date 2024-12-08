// Fetch user data dynamically (mock example for now)
const username = document.getElementById('username');
const email = document.getElementById('email');

// Replace with data from backend
username.textContent = 'JohnDoe'; // Replace with actual username
email.textContent = 'johndoe@example.com'; // Replace with actual email

// Redirect to create_page.html when the blue button is clicked
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
  // Redirect to the create page (createpage.html) when the button is clicked
  location.href = '../createpage/createpage.html';
});

// Change profile picture
const profilePic = document.querySelector('.profile-pic');
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';

// Trigger file input when clicking the camera icon
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
