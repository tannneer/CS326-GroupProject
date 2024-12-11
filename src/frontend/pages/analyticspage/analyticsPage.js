export function renderAnalyics() {
    // Dynamically load the CSS for the profile page
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/frontend/pages/analyticspage/analyticsPage.css"; 
    document.head.appendChild(link);
  
    // Add HTML content for the profile page
    const app = document.getElementById("app");
    app.innerHTML = `   
    <div id="analytics-page">
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
        <h1>Task Analytics Page</h1>
        
        <div class="task-section">
            <h2>Tasks</h2>
            <ul>
                <li><input type="checkbox" class="task-checkbox"> Task 1</li>
                <li><input type="checkbox" class="task-checkbox"> Task 2</li>
                <li><input type="checkbox" class="task-checkbox"> Task 3</li>
                <li><input type="checkbox" class="task-checkbox"> Task 4</li>
            </ul>
        </div>

        <div class="progress-section">
            <h2>Task 1 Progress</h2>
            <div class="Task1Progress">
                <div class="progress" id="assignmentProgress"></div>
            </div>
        </div>

        <div class="progress-section">
            <h2>Task 2 Progress</h2>
            <div class="Task2Progress">
                <div class="Task2p" id="assignmentProgress"></div>
            </div>
        </div>

        <div class="Task 3 Progress">
            <h2>Task 3 Progress</h2>
            <div class="Task3Progress">
                <div class="Task3p" id="assignmentProgress"></div>
            </div>
        </div>

        <div class="Task 4 Progress">
            <h2>Task 4 Progress</h2>
            <div class="Task4Progress">
                <div class="Task4p" id="assignmentProgress"></div>
            </div>
        </div>

        <div class="chart-section">
            <h2>Time Spent on Assignments</h2>
            <div class="pie-chart-container">
                <div class="donut-chart">
                    <div class="center"></div>
                </div>
            </div>
        </div>

        <div class="rating-section">
            <h2>Are you content with your progress?</h2>
            <input type="range" id="contentmentRating" min="0" max="100" value="50">
            <p id="contentmentText">Contentment: 50%</p>
        </div>
    </div> 
     </div>
    `;



document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".task-checkbox");
    const taskProgressBars = [
        document.querySelector(".Task1Progress .progress"),
        document.querySelector(".Task2Progress .Task2p"),
        document.querySelector(".Task3Progress .Task3p"),
        document.querySelector(".Task4Progress .Task4p")
    ];

    const ratingSlider = document.getElementById("contentmentRating");
    const contentmentText = document.getElementById("contentmentText");

    function updateProgress() {
        let completedTasks = 0;

        checkboxes.forEach((checkbox, index) => {
            const progressBar = taskProgressBars[index];
            if (checkbox.checked) {
                completedTasks++;
                progressBar.style.width = "100%"; 
            } else {
                progressBar.style.width = "0"; 
            }
        });
        const totalTasks = checkboxes.length;
        const progressPercentage = (completedTasks / totalTasks) * 100;
        ratingSlider.value = progressPercentage;
        contentmentText.innerText = `Contentment: ${Math.round(progressPercentage)}%`;
    }
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", updateProgress));
    ratingSlider.addEventListener("input", () => {
        contentmentText.innerText = `Contentment: ${ratingSlider.value}%`;
    });
    updateProgress();
}); 
}

