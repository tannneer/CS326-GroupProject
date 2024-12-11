export function renderCreateObj() {
  // Dynamically load the CSS for the create page
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "frontend/pages/createpage/createPage.css"; // Adjust path as needed
  document.head.appendChild(link);

  // Add the HTML content for the create page dynamically
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
    <div class="dash">
      <h3 class="titleText">Goals and Tasks</h3>
      <div class="goals">
        <div class="form-container">
          <h2>Set Your Goals</h2>
          <input id="goal1input" type="text" class="input" placeholder="Goal 1" />
          <input id="duedate1" type="date" class="input" />
          <input type="number" id="goalDueTime1" class="input" placeholder="Total hours to complete" />
          <input id="goal1submit" type="submit" class="add" value="Add Goal" />

          <input id="goal2input" type="text" class="input" placeholder="Goal 2" />
          <input id="duedate2" type="date" class="input" />
          <input type="number" id="goalDueTime2" class="input" placeholder="Total hours to complete" />
          <input id="goal2submit" type="submit" class="add" value="Add Goal" />

          <input id="goal3input" type="text" class="input" placeholder="Goal 3" />
          <input id="duedate3" type="date" class="input" />
          <input type="number" id="goalDueTime3" class="input" placeholder="Total hours to complete" />
          <input id="goal3submit" type="submit" class="add" value="Add Goal" />

          <div id="deleteAll" class="delete-all">Delete all</div>
        </div>
      </div>

      <div class="tasks">
        <h2>Set Your Tasks</h2>
        <div class="form">
          <input type="text" id="taskInput" class="input" placeholder="Enter Task name" />
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

      <div id="priorities-container" class="priorities"></div>

      <div class="calendar">Calendar</div>
    </div>
  `;

  // Attach event listeners and additional JavaScript functionality
  initializeCreatePage();
}

export async function addTaskController(){  

  const taskName = document.getElementById("taskInput").value;
  const hoursToComplete = document.getElementById("taskDueTime").value;
  const taskDueDate = document.getElementById("taskDueDate").value;

  const response = await fetch('http://localhost:3000/addTask', {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ taskName: taskName, hoursToComplete: hoursToComplete, dueDate: taskDueDate, isCompleted: false, timeSpent: 0}),
 });

 return response.json();

}


function initializeCreatePage() {
const addTaskButton = document.getElementById('addTaskBtn');
const firstGoalList = document.getElementById('goal-item1');
const secondGoalList = document.getElementById('goal-item2');
const thirdGoalList = document.getElementById('goal-item3');


addTaskButton.addEventListener('click', () => {

  const userInput = document.getElementById("taskInput");

  const taskBoxDiv = document.createElement("div");
  
  // Add styling to the container div
  taskBoxDiv.style.display = "flex";
  taskBoxDiv.style.alignItems = "center";
  taskBoxDiv.style.border = "3px solid grey";
  taskBoxDiv.style.borderRadius = "10px"; // Rounded corners
  taskBoxDiv.style.backgroundColor = "white"; // Light green background
  taskBoxDiv.style.padding = "3px"; // Padding for spacing
  taskBoxDiv.style.margin = "3px 0"; // Margin for spacing between tasks
  taskBoxDiv.style.fontFamily = "Arial, sans-serif"; // Set a clean font
  taskBoxDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // Subtle shadow
  taskBoxDiv.style.justifyContent = "space-between"; // Space out content
  
  // Create a task title
  const taskBox = document.createElement("h4");
  taskBox.innerHTML = userInput.value;
  taskBox.style.marginRight = "20px";
  
  // Create a custom checkbox 1
  const label1 = document.createElement("label");
  label1.className = "container"; // Add a class for styling
  label1.style.display = "flex"; // Ensure proper layout
  label1.style.alignItems = "center";
  label1.innerHTML = `
    <input type="checkbox">
    <span class="checkmark"></span>`;
  
  // Create a custom checkbox 2
  const label2 = document.createElement("label");
  label2.className = "container";
  label2.style.display = "flex";
  label2.style.alignItems = "center";
  label2.innerHTML = `
    <input type="checkbox">
    <span class="checkmark2"></span>`;
  
  // Append the task and checkboxes to the div
  taskBoxDiv.appendChild(taskBox);
  taskBoxDiv.appendChild(label1);
  taskBoxDiv.appendChild(label2);
  
  // Append the styled div to your parent container (e.g., a task list)
  firstGoalList.appendChild(taskBoxDiv);
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

  d.style.fontSize = "24px"; 
  d.style.fontWeight = "bold";
  d.style.color = "#2c3e50"; 
  d.style.margin = "10px 0"; 
  d.style.textAlign = "center"; 
  d.style.fontFamily = "Arial, sans-serif"; 
  
  d.style.border = "5px solid #2ec";
  d.style.borderRadius = "10px";
  d.style.padding = "10px";
  d.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  
  d.style.marginBottom = "10px";


  firstGoalList.appendChild(d);
});

//after hitting the submit goal button 1 - a POST with the following data is sent to the server
async function submitGoal1Backend(){ 
  const goalName = document.getElementById("goal1input").value; 
  const goalDueDate = document.getElementById("duedate1").value;
  const goalTotalTime = document.getElementById("goalDueTime1").value;

  const response = await fetch('http://localhost:3000/addGoal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: goalName,
      dueDate: goalDueDate,
      totalTime: goalTotalTime,
    }),
  });

  const result = await response.json();

  console.log(result);

}

//after hitting the submit task button 1 - a POST with the following data is sent to the server

// export async function addTaskController(){  

//   const taskName = document.getElementById("taskInput").value;
//   const taskDueDate = document.getElementById("taskDueDate").value;
//   const taskTotalTime = document.getElementById("taskDueTime").value;

//   const response = await fetch('http://localhost:3000/addTask', {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({ taskName, taskDueDate, taskTotalTime }),
//  });

//  return response.json();

// }

const secondGoal = document.getElementById('goal2submit');


secondGoal.addEventListener('click', () => {
  const secondGoalInput = document.getElementById("goal2input");
  const d = document.createElement("div");
  d.innerHTML = secondGoalInput.value;

  d.style.fontSize = "24px"; 
  d.style.fontWeight = "bold";
  d.style.color = "#2c3e50"; 
  d.style.margin = "10px 0"; 
  d.style.textAlign = "center"; 
  d.style.fontFamily = "Arial, sans-serif"; 
  
  d.style.border = "5px solid #2ec";
  d.style.borderRadius = "10px";
  d.style.padding = "10px";
  d.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  


  secondGoalList.appendChild(d);
});


const thirdGoal = document.getElementById('goal3submit');


thirdGoal.addEventListener('click', () => {
  const thirdGoalInput = document.getElementById("goal3input");
  const d = document.createElement("div");
  d.innerHTML = thirdGoalInput.value;

  d.style.fontSize = "24px"; 
  d.style.fontWeight = "bold";
  d.style.color = "#2c3e50"; 
  d.style.margin = "10px 0"; 
  d.style.textAlign = "center"; 
  d.style.fontFamily = "Arial, sans-serif"; 
  
  d.style.border = "5px solid #2ec";
  d.style.borderRadius = "10px";
  d.style.padding = "10px";
  d.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";


  thirdGoalList.appendChild(d);
});


//Priority List code 

const prioritiesContainer = document.getElementById("priorities-container");
// Create the main container div
const prioritiesDiv = document.createElement("div");
prioritiesDiv.className = "priorities";

// Create the form
const form = document.createElement("form");
form.id = "priority-form";
form.className = "priority-form";

// Create the "Priority name" input field
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "priority-name";
nameInput.placeholder = "Priority name";
nameInput.required = true;

// Create the "Due date" input field
const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.id = "due-date";
dateInput.required = true;

// Create the priority-level select dropdown
const select = document.createElement("select");
select.id = "priority-level";
select.required = true;

// Create the options for the select dropdown
const options = [
  { value: "!", text: "Low Priority (!)" },
  { value: "!!", text: "Mid Priority (!!)" },
  { value: "!!!", text: "High Priority (!!!)" },
];

options.forEach(optionData => {
  const option = document.createElement("option");
  option.value = optionData.value;
  option.textContent = optionData.text;
  select.appendChild(option);
});

// Create the submit button
const button = document.createElement("button");
button.type = "submit";
button.id = "add-priority";
button.textContent = "Add Priority";

// Append inputs and button to the form
form.appendChild(nameInput);
form.appendChild(dateInput);
form.appendChild(select);
form.appendChild(button);

// Create the priority list container
const priorityListDiv = document.createElement("div");
priorityListDiv.style.maxHeight = "300px";
priorityListDiv.id = "priority-list";

// Add the Priority List heading
const listHeading = document.createElement("h3");
listHeading.textContent = "Priority List";
priorityListDiv.appendChild(listHeading);

// Create High Priority section
const highPriorityDiv = document.createElement("div");
highPriorityDiv.id = "high-priority";
highPriorityDiv.textContent = "High Priority";
priorityListDiv.appendChild(highPriorityDiv);

// Create Medium Priority section
const mediumPriorityDiv = document.createElement("div");
mediumPriorityDiv.id = "medium-priority";
mediumPriorityDiv.textContent = "Medium Priority";
priorityListDiv.appendChild(mediumPriorityDiv);

// Create Low Priority section
const lowPriorityDiv = document.createElement("div");
lowPriorityDiv.id = "low-priority";
lowPriorityDiv.textContent = "Low Priority";
priorityListDiv.appendChild(lowPriorityDiv);

// Append the form and priority list to the main container
prioritiesDiv.appendChild(form);
prioritiesDiv.appendChild(priorityListDiv);

// Append the main container to the body (or any other container)
prioritiesContainer.appendChild(prioritiesDiv);




const addpriorityButton = document.getElementById("add-priority");


//handling priority form choice: 

document.getElementById("priority-form").addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values
  const priorityName = document.getElementById("priority-name").value;
  const dueDate = document.getElementById("due-date").value;
  const priorityLevel = document.getElementById("priority-level").value;

  // Determine where to add the new priority (based on priority level)
  let targetDiv;
  if (priorityLevel === "!!!") {
    targetDiv = document.getElementById("high-priority");
  } else if (priorityLevel === "!!") {
    targetDiv = document.getElementById("medium-priority");
  } else {
    targetDiv = document.getElementById("low-priority");
  }

  // Create a new priority item
  const priorityItem = document.createElement("div");
  priorityItem.textContent = `${priorityName} (Due: ${dueDate})`;
  priorityItem.style.marginBottom = "5px";

  targetDiv.appendChild(priorityItem);

  // Clear the form inputs
  document.getElementById("priority-name").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority-level").value = "!";
});


addpriorityButton.addEventListener('click', () => {
  

  
  if (priorityLevelText.value == "!"){ 
    lowPriority.appendChild(priorityNameInput.value);
  
  } else if (priorityLevelText.value == "!!"){ 
    mediumPriority.appendChild(priorityNameInput.value);
  
  } else { 
    highPriority.appendChild(priorityNameInput.value);
  
  }
  })

}
  //create page rendering 

  // export class Nav {
  //   constructor(appElementId) {
  //     this.app = document.getElementById(appElementId);
  //     if (!this.app) {
  //       throw new Error(`Element with ID "${appElementId}" not found.`); 
  //     } 
     
  //   }}

  // export async function renderCreatePage(appElementId, page) {
  //   const newpage = new Nav(appElementId);
  
  //   if (newpage === "create") {
  //     newpage.renderCreate();
  //   } else {
  //     throw new Error('Cannot find page');
  //   }
  // }

  
  














