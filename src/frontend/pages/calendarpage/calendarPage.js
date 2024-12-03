export function renderAllCalendarComponents() {
    // Create the base container for the calendar page
    const calendarPageContainer = document.createElement('div');
    calendarPageContainer.id = 'calendar-page-container';

    // Create the timer component
    const timerComponent = renderTimer();
    calendarPageContainer.appendChild(timerComponent);

    // Add the rest of your calendar components here (task list, calendar grid, etc.)
    
    return calendarPageContainer;
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

    // Timer-related variables
    let seconds = 0;
    let timerInterval = null;

    // Timer functions
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

