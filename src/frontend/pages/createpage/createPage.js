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


  firstGoalList.appendChild(d);
});


const secondGoal = document.getElementById('goal2submit');


secondGoal.addEventListener('click', () => {
  const secondGoalInput = document.getElementById("goal2input");
  const d = document.createElement("div");
  d.innerHTML = secondGoalInput.value;


  secondGoalList.appendChild(d);
});


const thirdGoal = document.getElementById('goal3submit');


thirdGoal.addEventListener('click', () => {
  const thirdGoalInput = document.getElementById("goal3input");
  const d = document.createElement("div");
  d.innerHTML = thirdGoalInput.value;


  thirdGoalList.appendChild(d);
});









