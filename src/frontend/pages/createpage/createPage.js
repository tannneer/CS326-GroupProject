export class CreatePage {
  constructor(appElementId) {
    this.app = document.getElementById(appElementId);
    if (!this.app) {
      throw new Error(`Element with ID "${appElementId}" not found.`);
    }
    this.arrayOfTasks = [];
    this.defaultData = {
      d2: ["09:00", "15:00"],
      d5: ["17:00", "20:00"],
    };
  }

  // Dynamically load CSS
  loadCSS(filePath) {
    if (!document.querySelector(`link[href="${filePath}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = filePath;
      document.head.appendChild(link);
    }
  }

  // Render the Create Page with Navbar
  render() {
    this.loadCSS("frontend/pages/createPage/createPage.css");

    this.app.innerHTML = `
      <nav class="navbar">
        <ul class="nav-list">
          <li><button class="nav-btn" id="createPageNav">Create Page</button></li>
          <li><button class="nav-btn" id="analyticsPageNav">Analytics Page</button></li>
          <li><button class="nav-btn" id="priorityPageNav">Priority Page</button></li>
          <li><button class="nav-btn logout-btn" id="logoutNav">Log Out</button></li>
        </ul>
      </nav>
      <div class="content">
        <h1 class="titleText">Task Creation</h1>
        <div class="outercontainer">
          <div class="box">
            <div class="wrap">
              <section class="ranges">
                <input id="all" name="dur" type="radio"/>
                <label for="all">Always</label>
                <input id="work" name="dur" type="radio"/>
                <label for="work">Work</label>
                <input id="custom" name="dur" type="radio"/>
                <label for="custom">Sometimes</label>
              </section>  
              <section class="timetable off">
                ${this.renderTimetable()}
              </section>
            </div>
          </div>
          <div id="box2" class="box">
            <div class="container">
              <div class="form">
                <input type="text" class="input" placeholder="Enter task" />
                <input type="submit" class="add" value="Add Task" />
              </div>
              <div class="tasks"></div>
              <div class="delete-all">Delete all</div>
            </div>
          </div>
        </div>
        <button type="submit" class="schedulebtn">Submit schedule</button>
      </div>
    `;

    // Restore tasks from localStorage
    if (window.localStorage.getItem("tasks")) {
      this.arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"));
    }
    this.getTaskFromLocalStorage();

    // Add event listeners
    this.attachEventListeners();
  }

  renderTimetable() {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days
      .map(
        (day, index) => `
        <input id="d${index + 1}" type="checkbox"/>
        <label for="d${index + 1}">
          <caption>${day}</caption>
          <div class="duration">
            <input type="time" value="09:00">
            <input type="time" value="20:00">
          </div>
        </label>
      `
      )
      .join("");
  }

  attachEventListeners() {
    // Navbar navigation
    document.getElementById("createPageNav").addEventListener("click", () => {
      this.render(); // Reload the create page
    });

    document.getElementById("analyticsPageNav").addEventListener("click", () => {
      this.loadPage("analyticsPage.js", "renderAnalyticsPage");
    });

    document.getElementById("priorityPageNav").addEventListener("click", () => {
      this.loadPage("priorityPage.js", "renderPriorityPage");
    });

    document.getElementById("logoutNav").addEventListener("click", () => {
      alert("Logged out successfully!");
      window.location.reload(); // Simulate logout and redirect to home
    });

    // Task creation event listeners
    this.attachTaskListeners();
  }

  attachTaskListeners() {
    const tasksDiv = this.app.querySelector(".tasks");
    const inputEle = this.app.querySelector(".input");
    const submitEle = this.app.querySelector(".add");
    const deleteAll = this.app.querySelector(".delete-all");

    submitEle.onclick = () => {
      if (inputEle.value !== "") {
        this.addTaskToArray(inputEle.value);
        inputEle.value = "";
      }
    };

    tasksDiv.onclick = (e) => {
      if (e.target.classList.contains("del")) {
        this.deleteTask(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
      }
      if (e.target.classList.contains("task")) {
        e.target.classList.toggle("done");
        this.updateTaskStatus(e.target.getAttribute("data-id"));
      }
    };

    deleteAll.onclick = () => {
      tasksDiv.innerHTML = "";
      window.localStorage.removeItem("tasks");
    };

    this.attachTimetableListeners();
  }

  attachTimetableListeners() {
    const main = this.app.querySelector(".timetable");

    this.app.querySelector("#all").onclick = () => {
      this.setTimetable(main, true, "00:00", "23:59");
    };

    this.app.querySelector("#work").onclick = () => {
      this.setTimetable(main, true, "09:00", "18:00", 5);
    };

    this.app.querySelector("#custom").onclick = () => {
      this.setTimetable(main, false, "09:00", "18:00");
    };
  }

  setTimetable(main, check, start, end, limit = 7) {
    const inputs = main.querySelectorAll("input[id^=d]");
    inputs.forEach((input, index) => {
      input.checked = check && index < limit;
      const times = input.nextElementSibling.querySelectorAll("input[type=time]");
      times[0].value = start;
      times[1].value = end;
    });
  }

  loadPage(scriptPath, renderFunction) {
    import(`./${scriptPath}`)
      .then((module) => {
        if (module[renderFunction]) {
          module[renderFunction](this.app); // Render the loaded page
        }
      })
      .catch((error) => {
        console.error(`Failed to load ${scriptPath}:`, error);
      });
  }

  addTaskToArray(taskText) {
    const task = {
      id: Date.now(),
      title: taskText,
      completed: false,
    };
    this.arrayOfTasks.push(task);
    this.addTaskToLocalStorage();
    this.addTaskToPage();
  }

  addTaskToLocalStorage() {
    window.localStorage.setItem("tasks", JSON.stringify(this.arrayOfTasks));
  }

  getTaskFromLocalStorage() {
    const data = window.localStorage.getItem("tasks");
    if (data) {
      this.arrayOfTasks = JSON.parse(data);
      this.addTaskToPage();
    }
  }

  addTaskToPage() {
    const tasksDiv = this.app.querySelector(".tasks");
    tasksDiv.innerHTML = "";

    this.arrayOfTasks.forEach((task) => {
      const div = document.createElement("div");
      div.className = `task ${task.completed ? "done" : ""}`;
      div.setAttribute("data-id", task.id);
      div.textContent = task.title;

      const span = document.createElement("span");
      span.className = "del";
      span.textContent = "Delete";
      div.appendChild(span);

      tasksDiv.appendChild(div);
    });
  }

  deleteTask(taskId) {
    this.arrayOfTasks = this.arrayOfTasks.filter((task) => task.id != taskId);
    this.addTaskToLocalStorage();
  }

  updateTaskStatus(taskId) {
    this.arrayOfTasks.forEach((task) => {
      if (task.id == taskId) {
        task.completed = !task.completed;
      }
    });
    this.addTaskToLocalStorage();
  }
}
