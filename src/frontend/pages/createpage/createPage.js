// export class CreatePage {
//   constructor(appElementId) {
//     this.app = document.getElementById(appElementId);
//     if (!this.app) {
//       throw new Error(`Element with ID "${appElementId}" not found.`);
//     }
//     this.arrayOfTasks = [];
//     this.defaultData = {
//       d2: ["09:00", "15:00"],
//       d5: ["17:00", "20:00"],
//     };
//   }

//   // Dynamically load CSS
//   loadCSS(filePath) {
//     if (!document.querySelector(`link[href="${filePath}"]`)) {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = filePath;
//       document.head.appendChild(link);
//     }
//   }

//   // Render the Create Page with Navbar
//   render() {
//     this.loadCSS("frontend/pages/createPage/createPage.css");

//     this.app.innerHTML = `
//       <nav class="navbar">
//         <ul class="nav-list">
//           <li><button class="nav-btn" id="createPageNav">Create Page</button></li>
//           <li><button class="nav-btn" id="analyticsPageNav">Analytics Page</button></li>
//           <li><button class="nav-btn" id="priorityPageNav">Priority Page</button></li>
//           <li><button class="nav-btn logout-btn" id="logoutNav">Log Out</button></li>
//         </ul>
//       </nav>
//       <div class="content">
//         <h1 class="titleText">Task Creation</h1>
//         <div class="outercontainer">
//           <div class="box">
//             <div class="wrap">
//               <section class="ranges">
//                 <input id="all" name="dur" type="radio"/>
//                 <label for="all">Always</label>
//                 <input id="work" name="dur" type="radio"/>
//                 <label for="work">Work</label>
//                 <input id="custom" name="dur" type="radio"/>
//                 <label for="custom">Sometimes</label>
//               </section>  
//               <section class="timetable off">
//                 ${this.renderTimetable()}
//               </section>
//             </div>
//           </div>
//           <div id="box2" class="box">
//             <div class="container">
//               <div class="form">
//                 <input type="text" class="input" placeholder="Enter task" />
//                 <input type="submit" class="add" value="Add Task" />
//               </div>
//               <div class="tasks"></div>
//               <div class="delete-all">Delete all</div>
//             </div>
//           </div>
//         </div>
//         <button type="submit" class="schedulebtn">Submit schedule</button>
//       </div>
//     `;

//     // Restore tasks from localStorage
//     if (window.localStorage.getItem("tasks")) {
//       this.arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
//     }
//     this.getTaskFromLocalStorage();

//     // Add event listeners
//     this.attachEventListeners();
//   }

//   renderTimetable() {
//     const days = [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ];
//     return days
//       .map(
//         (day, index) => `
//         <input id="d${index + 1}" type="checkbox"/>
//         <label for="d${index + 1}">
//           <caption>${day}</caption>
//           <div class="duration">
//             <input type="time" value="09:00">
//             <input type="time" value="20:00">
//           </div>
//         </label>
//       `
//       )
//       .join("");
//   }

let selectedGoal = 1;
function switchGoal(){ 
  const dropdown = document.getElementById("goal-dropdown");
  selectedGoal = parseInt(dropdown.value);
  console.log(`Switched to Goal ID: ${selectedGoal}`);

}

async function submitTaskBackend(){ 

  const taskName = document.getElementById("taskInput").value;
  const taskDueDate = document.getElementById("taskDueDate").value;
  const taskTotalTime = document.getElementById("taskDueTime").value;

  const response = await fetch('http://localhost:3000/addTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      taskName: taskName,
      taskDueDate: taskDueDate,
      taskTotalTime: taskTotalTime,
    }),
  });

  const result = await response.json();

  console.log(result);

}


const addTaskButton = document.getElementById('addTaskBtn');
const firstGoalList = document.getElementById('goal-item1');
const secondGoalList = document.getElementById('goal-item2');
const thirdGoalList = document.getElementById('goal-item3');


const taskList = document.getElementById(`goal-item${selectedGoal}`)

addTaskButton.addEventListener('click', () => {

  //put switch goal here - taskList.appendChild() at bottom

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
  taskList.appendChild(taskBoxDiv);

  submitTaskBackend();
});


const deleteAllButton = document.getElementById('deleteAll');


deleteAllButton.addEventListener('click', () => {
  firstGoalList.innerHTML = '';
});


//after hitting the submit goal button 1 - a POST with the following data is sent to the server
async function submitGoal1Backend(){ 
  /*VERY IMPORTANT LOOK AT THE FORMAT OF THE DATE*/

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

const firstGoal = document.getElementById('goal1submit');


firstGoal.addEventListener('click', () => {
  firstGoalList.innerHTML ='';

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
  d.classList.add("hover-effect");

  firstGoalList.appendChild(d);

  submitGoal1Backend();
});



//after hitting the submit task button 1 - a POST with the following data is sent to the server

export async function addTaskController(){ 

  const taskName = document.getElementById("taskInput").value;
  const taskDueDate = document.getElementById("taskDueDate").value;
  const taskTotalTime = document.getElementById("taskDueTime").value;

  const response = await fetch('http://localhost:3000/addTask', {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ taskName, taskDueDate, taskTotalTime }),
 });

 return response.json();

}

async function submitGoal2Backend(){ 
  const goalName = document.getElementById("goal2input").value; 
  const goalDueDate = document.getElementById("duedate2").value;
  const goalTotalTime = document.getElementById("goalDueTime2").value;

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


const secondGoal = document.getElementById('goal2submit');


secondGoal.addEventListener('click', () => {
  secondGoalList.innerHTML ='';

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
  d.classList.add("hover-effect");

  


  secondGoalList.appendChild(d);

  submitGoal2Backend();


});

async function submitGoal3Backend(){ 
  const goalName = document.getElementById("goal3input").value; 
  const goalDueDate = document.getElementById("duedate3").value;
  const goalTotalTime = document.getElementById("goalDueTime3").value;

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



const thirdGoal = document.getElementById('goal3submit');


thirdGoal.addEventListener('click', () => {
  thirdGoalList.innerHTML ='';

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
  d.classList.add("hover-effect");



  thirdGoalList.appendChild(d);

  submitGoal3Backend();
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

  //create page rendering 

  export class Nav {
    constructor(appElementId) {
      this.app = document.getElementById(appElementId);
      if (!this.app) {
        throw new Error(`Element with ID "${appElementId}" not found.`); 
      } 
     
    }}

  export async function renderCreatePage(appElementId, page) {
    const newpage = new Nav(appElementId);
  
    if (newpage === "create") {
      newpage.renderCreate();
    } else {
      throw new Error('Cannot find page');
    }
  }

 
  











// document.addEventListener('DOMContentLoaded', async () => {
//   const taskComponent = new TaskComponent();
//   const renderedComponent = await taskComponent.render();


//   // Locate the Goals List container in the DOM
//   const goalsListContainer = document.querySelector('.goal-item1');
//   if (goalsListContainer) {
//     goalsListContainer.appendChild(renderedComponent);
//   }
// });



