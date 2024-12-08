export function renderAllCalendarComponents() {
    const calendarPageContainer = document.createElement('div');
    calendarPageContainer.classList.add('container');

    // Navbar
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');
    ['Create', 'Priorities', 'Analysis'].forEach(page => {
        const navItem = document.createElement('a');
        navItem.href = `#${page.toLowerCase()}`;
        navItem.textContent = page;
        navItem.classList.add('nav-item');
        navbar.appendChild(navItem);
    });
    calendarPageContainer.appendChild(navbar);

    // Timer Component
    const timerComponent = renderTimer();
    calendarPageContainer.appendChild(timerComponent);

    // Goals Section
    const goalsSection = document.createElement('div');
    goalsSection.classList.add('goals-section');
    const goalsTitle = document.createElement('h3');
    goalsTitle.textContent = 'Your Goals';
    goalsSection.appendChild(goalsTitle);

    // Placeholder for goal list
    const goalList = document.createElement('ul');
    goalList.classList.add('goal-list');
    goalsSection.appendChild(goalList);
    calendarPageContainer.appendChild(goalsSection);

    // Goal creation form
    const goalForm = document.createElement('div');
    goalForm.classList.add('goal-form');

    const goalInput = document.createElement('input');
    goalInput.placeholder = 'Goal Name';
    goalForm.appendChild(goalInput);

    const priorityInput = document.createElement('input');
    priorityInput.type = 'number';
    priorityInput.placeholder = 'Priority (1 is highest)';
    goalForm.appendChild(priorityInput);

    const createButton = document.createElement('button');
    createButton.textContent = 'Create Goal';
    goalForm.appendChild(createButton);
    calendarPageContainer.appendChild(goalForm);

    // Array to store goals
    let goals = [];

    // Handle creating a new goal
    createButton.addEventListener('click', () => {
        const goalName = goalInput.value;
        const priority = parseInt(priorityInput.value);

        if (goalName && !isNaN(priority)) {
            const newGoal = { name: goalName, priority };
            goals.push(newGoal);

            // Sort the goals by priority (highest to lowest)
            goals.sort((a, b) => b.priority - a.priority);

            // Clear the current goal list
            goalList.innerHTML = '';

            // Display the top 3 goals
            goals.slice(0, 3).forEach(goal => {
                const listItem = document.createElement('li');
                listItem.textContent = `${goal.name} (Priority: ${goal.priority})`;
                goalList.appendChild(listItem);
            });

            // Clear the input fields
            goalInput.value = '';
            priorityInput.value = '';
        }
    });

    // Add the calendar button and modal to open it
    const calendarBtn = document.createElement('button');
    calendarBtn.textContent = "Open Calendar";
    calendarBtn.id = 'calendarBtn';
    calendarPageContainer.appendChild(calendarBtn);

    // Create the modal for the calendar
    const calendarModal = document.createElement('div');
    calendarModal.id = 'calendarModal';
    calendarModal.classList.add('calendar-modal');
    
    // Modal content
    const calendarContent = document.createElement('div');
    calendarContent.classList.add('calendar-content');
    
    // Close button for the modal
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    calendarContent.appendChild(closeBtn);
    
    // Calendar element (this will be initialized with FullCalendar)
    const calendarDiv = document.createElement('div');
    calendarDiv.id = 'calendar';
    calendarContent.appendChild(calendarDiv);

    calendarModal.appendChild(calendarContent);
    calendarPageContainer.appendChild(calendarModal);

    // Event listener to open the calendar modal
    calendarBtn.addEventListener('click', () => {
        calendarModal.style.display = 'block'; // Show the modal
        initializeCalendar(); // Initialize FullCalendar
    });

    // Event listener to close the modal
    closeBtn.addEventListener('click', () => {
        calendarModal.style.display = 'none'; // Hide the modal
    });

    return calendarPageContainer;
}

function initializeCalendar() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'resourceTimelineWeek'
    });
    calendar.render();
}


