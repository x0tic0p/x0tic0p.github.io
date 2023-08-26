const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const finishedTasks = document.getElementById("finishedTasks");
const resetButton = document.getElementById("resetButton");
const container = document.querySelector(".container"); // Container element


// Load tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach(task => {
    createTaskElement(task);
});

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const task = { text: taskText, finished: false };
        savedTasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        createTaskElement(task);
        taskInput.value = "";
        checkAllTasksCompleted(); // Check after adding a task
    }
}

// Create task element function
function createTaskElement(task) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${task.text}</span>
    `;
    
    const checkbox = taskItem.querySelector("input");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            task.finished = true;
            finishedTasks.appendChild(taskItem);
        } else {
            task.finished = false;
            taskList.appendChild(taskItem);
        }
        updateLocalStorage();
        checkAllTasksCompleted(); // Check after changing task status
    });

    if (task.finished) {
        checkbox.checked = true;
        finishedTasks.appendChild(taskItem);
    } else {
        taskList.appendChild(taskItem);
    }
}

// Reset tasks
resetButton.addEventListener("click", () => {
    localStorage.removeItem("tasks");
    taskList.innerHTML = "";
    finishedTasks.innerHTML = "";
    savedTasks.length = 0;
    checkAllTasksCompleted(); // Check after resetting tasks
});

// Save tasks to local storage
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

// Add task when the "Add Task" button is clicked
addButton.addEventListener("click", addTask);

// Add task when Enter key is pressed in the task input
taskInput.addEventListener("keyup", event => {
    if (event.key === "Enter") {
        addTask();
    }
});
