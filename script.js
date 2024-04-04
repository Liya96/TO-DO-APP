function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerText = taskText;
    li.setAttribute("onclick", "toggleTaskStatus(this)");
    taskList.appendChild(li);

   
    taskInput.value = "";

    saveTasks();
}

function toggleTaskStatus(task) {
    task.classList.toggle("completed");
    saveTasks();
}


function saveTasks() {
    var taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
}


function loadTasks() {
    var taskList = document.getElementById("taskList");
    var savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}

window.onload = loadTasks;
