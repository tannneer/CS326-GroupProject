// Mock user data (this can be replaced with real backend data if available)
const userData = {
    email: 'johndoe@example.com',
    username: 'JohnDoe',
    password: 'securepassword',
  };
  
  // Update the DOM with user details
  const usernameElement = document.getElementById('username');
  const emailElement = document.getElementById('email');
  
  // Populate with actual data
  const { email, username } = userData;
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
  