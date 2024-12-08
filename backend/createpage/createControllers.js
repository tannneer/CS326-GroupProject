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

