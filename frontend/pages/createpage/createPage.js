const addTaskButton = document.getElementById('addTaskBtn');
const firstGoalList = document.getElementById('goal-item1');
const secondGoalList = document.getElementById('goal-item2');
const thirdGoalList = document.getElementById('goal-item3');

addTaskButton.addEventListener('click', () => { 

  const input = document.getElementById("taskInput");
  const d = document.createElement("div");

  d.innerHTML = input.value;

  d.style.borderRadius = '10px'; // Rounded corners
  d.style.backgroundColor = 'rgb(187, 255, 244);'; // Light green background
  d.style.padding = '10px'; // Padding for spacing
  d.style.margin = '5px 0'; // Margin for spacing between tasks
  d.style.fontFamily = 'Arial, sans-serif'; // Optional: Set a font
  d.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Optional: Add a subtle shadow

  firstGoalList.appendChild(d);

});

const deleteAllButton = document.getElementById('deleteAll');

deleteAllButton.addEventListener('click', () => {
  firstGoalList.innerHTML = '';
});

const firstGoal = document.getElementById('goal1submit');

firstGoal.addEventListener('click', () => {
  const firstGoalInput = document.getElementById("goal1input");
  const d = document.createElement("div");
  d.innerHTML = firstGoalInput.value;

  d.style.fontSize = "24px"; // Title-like size
  d.style.fontWeight = "bold"; // Bold text
  d.style.color = 'green';// Set text color
  d.style.marginBottom = "10px"; // Add spacing below
  d.style.textAlign = "center"; // Center the text
  d.style.border = "2px solid lightgreen"; // Add a border
  d.style.padding = "10px"; // Add some padding inside the border
  d.style.borderRadius = "5px"; // Optional: Rounded corners
  d.style.backgroundColor = '#bbf0e7'; // Optional: Set a background color




  firstGoalList.appendChild(d);
});

const secondGoal = document.getElementById('goal2submit');

secondGoal.addEventListener('click', () => {
  const secondGoalInput = document.getElementById("goal2input");
  const d = document.createElement("div");
  d.innerHTML = secondGoalInput.value;

  d.style.fontSize = "24px"; // Title-like size
  d.style.fontWeight = "bold"; // Bold text
  d.style.color = 'green';// Set text color
  d.style.marginBottom = "10px"; // Add spacing below
  d.style.textAlign = "center"; // Center the text
  d.style.border = "2px solid lightgreen"; // Add a border
  d.style.padding = "10px"; // Add some padding inside the border
  d.style.borderRadius = "5px"; // Optional: Rounded corners
  d.style.backgroundColor = '#bbf0e7'; // Optional: Set a background color


  secondGoalList.appendChild(d);
}); 

const thirdGoal = document.getElementById('goal3submit');

thirdGoal.addEventListener('click', () => {
  const thirdGoalInput = document.getElementById("goal3input");
  const d = document.createElement("div");
  d.innerHTML = thirdGoalInput.value;

  d.style.fontSize = "24px"; // Title-like size
  d.style.fontWeight = "bold"; // Bold text
  d.style.color = 'green';// Set text color
  d.style.marginBottom = "10px"; // Add spacing below
  d.style.textAlign = "center"; // Center the text
  d.style.border = "2px solid lightgreen"; // Add a border
  d.style.padding = "10px"; // Add some padding inside the border
  d.style.borderRadius = "5px"; // Optional: Rounded corners
  d.style.backgroundColor = '#bbf0e7'; // Optional: Set a background color

  thirdGoalList.appendChild(d);
});

//Dropdown

// Get the dropdown button and container
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.dropdown');

// Toggle the dropdown visibility
dropdownBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click from bubbling to the window
  dropdown.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', () => {
  dropdown.classList.remove('show');
});

//Handle clicking each goal
const goals = document.querySelectorAll('.goal');
const goalsArr = [goals[0], goals[1], goals[2]];

for (let i = 0; i < goalsArr.length; i++) {
  goalsArr[i].addEventListener('click', (event) => {
    event.stopPropagation();

    // Toggle the 'selected' class
    goalsArr[i].classList.toggle('selected');

    // Toggle the data-selected attribute (boolean)
    const isSelected = goalsArr[i].getAttribute('data-selected') === 'true';
    goalsArr[i].setAttribute('data-selected', !isSelected);

    // Log the state for debugging
    console.log(goalsArr[i].innerText, 'selected:', !isSelected);
  });
}

// }





// document.addEventListener('DOMContentLoaded', async () => {
//   const taskComponent = new TaskComponent();
//   const renderedComponent = await taskComponent.render();

//   // Locate the Goals List container in the DOM
//   const goalsListContainer = document.querySelector('.goal-item1');
//   if (goalsListContainer) {
//     goalsListContainer.appendChild(renderedComponent);
//   }
// });
