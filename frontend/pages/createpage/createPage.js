let inputEle = document.querySelector(".input");
let submitEle = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks")
let containerDiv = document.querySelector(".container")
let deleteAll = document.querySelector(".delete-all");
let arrayOfTasks =[];
// console.log(inputEle)

if(window.localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"))
}
getTaskFromLocalStorage();

submitEle.onclick = function() {
    if(inputEle.value !== "") {
        addTaskToArray(inputEle.value);
        inputEle.value ="";
    }
}

function addTaskToArray (taskText) {
    const task = {
        id : Date.now(),
        title : taskText,
        complated : false,
    };
    arrayOfTasks.push(task);
    // console.log(arrayOfTasks);
    addTaskToPage(arrayOfTasks);

    addTaskToLocalStorage(arrayOfTasks);
}

function addTaskToPage(arrayOfTasks) {
    tasksDiv.innerHTML = "";

    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        if(task.complated){
            div.className = "task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"))
        div.appendChild(span);
        tasksDiv.appendChild(div)
        // console.log(div)
    });
}


function addTaskToLocalStorage(arrayOfTasks){
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}
function getTaskFromLocalStorage(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        let tasks = JSON.parse(data);
        // console.log(tasks)
        addTaskToPage(tasks);
    }
}

function addElementsToPageFrom(arrayOfTasks) {
    // Empty Tasks Div
    tasksDiv.innerHTML = "";
    // Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
      // Create Main Div
        let div = document.createElement("div");
        div.className = "task";
        // Check If Task is Done
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Create Delete Button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        // Append Button To Main Div
        div.appendChild(span);
        // Add Task Div To Tasks Container
        tasksDiv.appendChild(div);
    });
}

// Click On Task Element
tasksDiv.onclick = ((e) => {
    if (e.target.classList.contains("del")) {
        // e.target.parentElement.remove();
        e.target.parentElement.remove();
        deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
    }
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle("done");
        updateStatusInLocalStorage(e.target.getAttribute("data-id"));
    }
})


function deleteTaskFromLocalStorage(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addTaskToLocalStorage(arrayOfTasks);
}
function updateStatusInLocalStorage(taskId) {
    arrayOfTasks.forEach((task) =>{
        if(task.id == taskId)
            task.complated == false ? task.complated = true:task.complated = false;
    });

    addTaskToLocalStorage(arrayOfTasks);
}

deleteAll.onclick = function(e){
    tasksDiv.innerHTML = "";
    window.localStorage.removeItem("tasks")
}

var data = {
    d2: ["09:00","15:00"],
    d5: ["17:00","20:00"]
  };
  var qs  = function(css,p=document){return p.querySelector(css);};
  var qsa = function(css,p=document){return p.querySelectorAll(css);};
  
  (function(table){
    var main = qs(".timetable");
    var rs = qs("h2 small");
    var defs = {
      start: "09:00",
      end  : "18:00"
    }
    qs('#all').onclick = function(){
      if (qsa(".off").length === 1) {
        main.setAttribute('class', 'timetable');
      }
      [].forEach.call(qsa('input[id^=d]',main),function(x){
        x.checked = true;
        var tl = qsa('input[type=time]', x.nextElementSibling);
        tl[0].value = "00:00";
        tl[1].value = "23:59";
      });
      update();
    };
    
    qs('#work').onclick = function(){
      if (qsa(".off").length === 1) {
        main.setAttribute('class', 'timetable');
      }
      [].forEach.call(qsa('input[id^=d]', main),function(x,i){
        if (i<5) x.checked = true;
        else x.checked = false;
        var tl = qsa('input[type=time]', x.nextElementSibling);
        tl[0].value = defs.start;
        tl[1].value = defs.end;
      });
      update();
    };
    
    qs('#custom').onclick = function(){
      if (qsa(".off").length === 1) {
        main.setAttribute('class', 'timetable');
      }
     [].forEach.call(qsa('input[id^=d]', main),function(x,i){
        x.checked = false;
        var tl = qsa('input[type=time]', x.nextElementSibling);
        tl[0].value = defs.start;
        tl[1].value = defs.end;
      });
      update();
    };
    
    [].forEach.call(qsa('input[type=checkbox]', main), function(x,i){
      x.onchange = function(){
        update();
      }
    });
    
    [].forEach.call(qsa('input[type=time]', main), function(x,i){
        // x.addEventListener("click mousedown", function(){
        x.onclick = function(){
          if ( x.nextElementSibling ){
            //from
            if (this.value > x.nextElementSibling.value){
              this.value = x.nextElementSibling.value;
            }
            //limit upper
            //if (this.value == "24:00") this.value = "00:00"
          } else {
            //to
            if (this.value < x.previousElementSibling.value){
              this.value = x.previousElementSibling.value;
            }
            //limit lower
            //if (this.value == "00:00") this.value = "24:00"
          }
          update();
        };
    });
    
    init();
    
    function init(){
      if (table != 'undefined' && table != {}) {
        qs('#custom').checked = true;
        qs('#custom').dispatchEvent(new Event('click'));
        for (var day in table) {
          var id = "label[for="+ day +"]";
          var times = table[day];
          qs("#"+day).checked = true;
          qsa(id + ' input')[0].value = times[0];
          qsa(id + ' input')[1].value = times[1];
        }
        update();
      }
    }
    
    function update(){
      var txt = [];
      var checkd = qsa('input:checked + label', main);
      switch (checkd.length) {
        case 0:
          rs.innerText = "Never";
          return;
        case 7:
          rs.innerText = "Anytime";
          return;
      }
      [].forEach.call( checkd, function(x,i){
        var tval = qsa('.duration input',x);
        var key = x.getAttribute('for');
        table[key] = [tval[0].value,tval[1].value];
        txt.push(key + "["+tval[0].value+","+tval[1].value+"]");
      });
      rs.innerText = txt.join("\n");
      // rs.innerText = JSON.stringify(table);
    }
    
    function toggle(){
      var cls = "timetable";
      if (qsa(".off").length === 0) {
        cls += ' off';
      }
      qs(".timetable").setAttribute('class',cls);
    }
    
  })(data);