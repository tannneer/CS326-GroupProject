export function renderAllCalendarComponents() {
    // const calendarPageContainer = document.createElement('div');
    // calendarPageContainer.classList.add('container');

    // // Navbar
    // const navbar = document.createElement('nav');
    // navbar.classList.add('navbar');
    // ['Create', 'Priorities', 'Analysis'].forEach(page => {
    //     const navItem = document.createElement('a');
    //     navItem.href = `#${page.toLowerCase()}`;
    //     navItem.textContent = page;
    //     navItem.classList.add('nav-item');
    //     navbar.appendChild(navItem);
    // });
    // calendarPageContainer.appendChild(navbar);

    // // Timer Component
    // const timerComponent = renderTimer();
    // calendarPageContainer.appendChild(timerComponent);

    // // Goals Section
    // const goalsSection = document.createElement('div');
    // goalsSection.classList.add('goals-section');
    // const goalsTitle = document.createElement('h3');
    // goalsTitle.textContent = 'Your Goals';
    // goalsSection.appendChild(goalsTitle);

    // // Static goals
    // const goalList = document.createElement('ul');
    // goalList.classList.add('goal-list');
    // ['Goal 1', 'Goal 2', 'Goal 3'].forEach(goal => {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = goal;
    //     goalList.appendChild(listItem);
    // });
    // goalsSection.appendChild(goalList);
    // calendarPageContainer.appendChild(goalsSection);

    // return calendarPageContainer; 

        // Dynamically load the CSS for the calendar page
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "frontend/pages/calendarpage/calendarPage.css"; 
        document.head.appendChild(link);
    
        // Add the HTML content dynamically for the calendar page
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
                <div id="timer-container" class="timer-container">
                    <div id="timerDisplay" class="timer-display">00:00</div>
                    <button id="startButton" class="timer-button">Start</button>
                    <button id="stopButton" class="timer-button">Stop</button>
                    <button id="resetButton" class="timer-button">Reset</button>
                </div>
                <div class="goals-section">
                    <h3>Your Goals</h3>
                    <ul class="goal-list">
                        <li>Goal 1</li>
                        <li>Goal 2</li>
                        <li>Goal 3</li>
                    </ul>
                </div>
            </div>
        `;
    
        // Attach functionality to the timer
        renderTimer();
}

function renderTimer() {
    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer-container');

    // Create and append the timer display
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timerDisplay';
    timerDisplay.textContent = '00:00';
    timerContainer.appendChild(timerDisplay);

    // Create and append the start button
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.addEventListener('click', startTimer);
    timerContainer.appendChild(startButton);

    // Create and append the stop button
    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    stopButton.addEventListener('click', stopTimer);
    timerContainer.appendChild(stopButton);

    // Create and append the reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', resetTimer);
    timerContainer.appendChild(resetButton);

    let seconds = 0;
    let timerInterval = null;

    function startTimer() {
        if (timerInterval) return; // Prevent multiple intervals
        timerInterval = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerDisplay.textContent = `${padTime(minutes)}:${padTime(remainingSeconds)}`;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        timerDisplay.textContent = '00:00';
    }

    function padTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return timerContainer;
}
