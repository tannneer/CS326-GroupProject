export function renderAllCalendarComponents() {
    const calendarPageContainer = document.createElement('div');
    calendarPageContainer.classList.add('container');

    // Navbar
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    ['Create', 'Priorities', 'Analytics'].forEach(page => {
        const navItem = document.createElement('a');
        navItem.href = `#${page.toLowerCase()}`;
        navItem.textContent = page;
        navItem.classList.add('nav-item');
        navbar.appendChild(navItem);
    });
    calendarPageContainer.appendChild(navbar);

    // Tasks Calendar Section (left side)
    const tasksCalendar = document.createElement('div');
    tasksCalendar.classList.add('tasks-calendar');
    const tasksCalendarTitle = document.createElement('h3');
    tasksCalendarTitle.textContent = 'Tasks Calendar';
    tasksCalendar.appendChild(tasksCalendarTitle);

    const placeholderText = document.createElement('p');
    placeholderText.textContent = 'Tasks organized by deadline and time will appear here.';
    tasksCalendar.appendChild(placeholderText);
    calendarPageContainer.appendChild(tasksCalendar);

    // Right column container
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('right-column');

    // Timer Component
    const timerComponent = renderTimer();
    rightColumn.appendChild(timerComponent);

    // Goals Section
    const goalsSection = document.createElement('div');
    goalsSection.classList.add('goals-section');
    const goalsTitle = document.createElement('h3');
    goalsTitle.textContent = 'Your Current Tasks';
    goalsSection.appendChild(goalsTitle);

    // Static goals
    const goalList = document.createElement('ul');
    goalList.classList.add('goal-list');
    ['Task 1', 'Task 2', 'Task 3'].forEach(goal => {
        const listItem = document.createElement('li');
        listItem.textContent = goal;
        goalList.appendChild(listItem);
    });
    goalsSection.appendChild(goalList);
    rightColumn.appendChild(goalsSection);

    calendarPageContainer.appendChild(rightColumn);

    return calendarPageContainer;
}

function renderTimer() {
    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer-container');

    // Create and append the timer display
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timerDisplay';
    timerDisplay.textContent = '00:00:00';
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
        timerDisplay.textContent = '00:00:00';
    }

    function padTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return timerContainer;
}
