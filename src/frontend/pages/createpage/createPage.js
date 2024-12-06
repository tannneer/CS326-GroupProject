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






// document.addEventListener('DOMContentLoaded', async () => {
//   const taskComponent = new TaskComponent();
//   const renderedComponent = await taskComponent.render();


//   // Locate the Goals List container in the DOM
//   const goalsListContainer = document.querySelector('.goal-item1');
//   if (goalsListContainer) {
//     goalsListContainer.appendChild(renderedComponent);
//   }
// });



