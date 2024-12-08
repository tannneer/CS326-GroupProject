/*
     async handleLogin() {
        // const email = document.getElementById("email").value;
         const username = document.getElementById("usernameLogin").value;
         const password = document.getElementById("password").value;

         const response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
        alert(data.message);
    

       }
    
 */

       export async function addGoalController() { 

         const goalName = document.getElementById("goal1input").value;
         const goalDueDate = document.getElementById("goaldudedate1").value; 
         const goalTotalTime = document.getElementById("goalDueTime1").value;

         const response = await fetch("/addGoal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ goalName, goalDueDate, goalTotalTime }),
        });

        return response.json(); 
       }

       export async function addTaskController(){ 

         const taskName = document.getElementById("taskInput").value;
         const taskDueDate = document.getElementById("taskDueDate").value;
         const taskTotalTime = document.getElementById("taskDueTime").value;

         const response = await fetch("/addTask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ taskName, taskDueDate, taskTotalTime }),
        });

        return response.json();

       }

