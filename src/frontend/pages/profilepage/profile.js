// Fetch user data dynamically (mock example for now)
const username = document.getElementById('username');
const email = document.getElementById('email');

// Replace with data from backend
username.textContent = 'JohnDoe'; // Replace with actual username
email.textContent = 'johndoe@example.com'; // Replace with actual email

// Function to render the Create Page
function renderCreatepage() {
  // Load the CSS
  loadCSS("frontend/pages/createpage/createPage.css");

  // Inject the HTML content for the create page
  document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Create</title>
      <link rel="stylesheet" href="createPage.css">
      <script type="module" src="createPage.js"></script>
    </head>
    <body>
      <div class="dash">
        <h3 class="titleText">Goals and Tasks</h3>
        <div class="goals">
          <div class="form-container">
            <h2>Set Your Goals</h2>
            <input id="goal1input" type="text" class="input" placeholder="Goal 1" />
            <input type="number" id="goalDueTime1" class="input" placeholder="Total hours to complete" />
            <input id="goal1submit" type="submit" class="add" value="Add Goal" />
            <input id="goal2input" type="text" class="input" placeholder="Goal 2" />
            <input type="number" id="goalDueTime2" class="input" placeholder="Total hours to complete" />
            <input id="goal2submit" type="submit" class="add" value="Add Goal" />
            <input id="goal3input" type="text" class="input" placeholder="Goal 3" />
            <input type="number" id="goalDueTime3" class="input" placeholder="Total hours to complete" />
            <input id="goal3submit" type="submit" class="add" value="Add Goal" />
            <div class="delete-all">Delete all</div>
          </div>
        </div>
        <div class="tasks">
          <h2>Set Your Tasks</h2>
          <div class="form">
            <input type="text" id="taskInput" class="input" placeholder="Enter Task name"/>
            <input type="date" id="taskDueDate" class="input" placeholder="Due date" />
            <input type="number" id="taskDueTime" class="input" placeholder="Hours to complete" />
            <div class="dropdown">
              <button class="dropdown-btn">Select Goal</button>
              <div class="dropdown-content">
                <div class="goal" data-selected="false">Goal 1</div>
                <div class="goal" data-selected="false">Goal 2</div>
                <div class="goal" data-selected="false">Goal 3</div>
              </div>
            </div>
            <input type="submit" id="addTaskBtn" class="add" value="Add Task" />
          </div>
          <div id="deleteAll" class="delete-all">Delete all</div>
        </div>
        <div class="goals-list">
          <div class="goal-item-container">
            <div id="goal-item1" class="goal-item"></div>
            <div id="goal-item2" class="goal-item"></div>
            <div id="goal-item3" class="goal-item"></div>
          </div>
        </div>
        <div class="priorities">
          <form id="priority-form">
            <input type="text" id="priority-name" placeholder="Priority name" required>
            <input type="date" id="due-date" required>
            <select id="priority-level" required>
              <option value="!">Low Priority (!)</option>
              <option value="!!">Mid Priority (!!)</option>
              <option value="!!!">High Priority (!!!)</option>
            </select>
            <button type="submit">Add Priority</button>
          </form>
          <div id="priority-list">
            <h2>Priority List</h2>
            <!-- Items will be dynamically added here -->
          </div>
        </div>
        <div class="calendar">Calendar</div>
      </div>
    </body>
    </html>
  `;
}

// Redirect to create_page.html when the blue button is clicked
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
  renderCreatepage();  // Call the render function when button is clicked
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
