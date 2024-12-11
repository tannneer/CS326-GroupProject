export function renderAllCalendarComponents() {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Clear any previous content

    // Create Navbar
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.innerHTML = `
        <div class="navbar-left"> 
            <a href="/create-objectives" class="nav-link">Create Objectives</a>
            <a href="/calendar" class="nav-link">Calendar</a>
            <a href="/analytics" class="nav-link">Analytics</a>
        </div>
        <div class="navbar-right">
            <a href="/profile" class="profile-btn">Profile</a>
        </div>
    `;
    document.body.prepend(navbar); // Ensure navbar is fixed at the top

    // Create Main Container for Grid Layout
    const calendarPageContainer = document.createElement("div");
    calendarPageContainer.classList.add("container");

    // Tasks Calendar Section (Left Column)
    const tasksCalendar = document.createElement("div");
    tasksCalendar.classList.add("tasks-calendar");
    tasksCalendar.innerHTML = `
        <h3>Tasks Calendar</h3>
        <p>Tasks organized by deadline and time will appear here.</p>
    `;
    calendarPageContainer.appendChild(tasksCalendar);

    // Right Column Container
    const rightColumn = document.createElement("div");
    rightColumn.classList.add("right-column");

    // Timer Component
    const timerContainer = document.createElement("div");
    timerContainer.classList.add("timer-container");
    timerContainer.innerHTML = `
        <div id="timerDisplay" class="timer-display">00:00</div>
        <button id="startButton" class="timer-button">Start</button>
        <button id="stopButton" class="timer-button">Stop</button>
        <button id="resetButton" class="timer-button">Reset</button>
    `;
    rightColumn.appendChild(timerContainer);

    // Goals Section
    const goalsSection = document.createElement("div");
    goalsSection.classList.add("goals-section");
    goalsSection.innerHTML = `
        <h3>Your Goals</h3>
        <ul class="goal-list">
            <li>Goal 1</li>
            <li>Goal 2</li>
            <li>Goal 3</li>
        </ul>
    `;
    rightColumn.appendChild(goalsSection);

    // Add Right Column to Main Grid Layout
    calendarPageContainer.appendChild(rightColumn);

    // Append the Main Grid Layout to the App
    app.appendChild(calendarPageContainer);

    // Timer functionality (unchanged)
    const timerDisplay = timerContainer.querySelector("#timerDisplay");
    const startButton = timerContainer.querySelector("#startButton");
    const stopButton = timerContainer.querySelector("#stopButton");
    const resetButton = timerContainer.querySelector("#resetButton");

    let timerInterval = null;
    let seconds = 0;

    const startTimer = () => {
        if (timerInterval) return; // Prevent multiple intervals
        timerInterval = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerDisplay.textContent = `${padTime(minutes)}:${padTime(remainingSeconds)}`;
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
        timerInterval = null;
    };

    const resetTimer = () => {
        stopTimer();
        seconds = 0;
        timerDisplay.textContent = "00:00";
    };

    const padTime = (time) => (time < 10 ? `0${time}` : time);

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);
}
