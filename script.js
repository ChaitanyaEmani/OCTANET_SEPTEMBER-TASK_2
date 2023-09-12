const taskInput = document.getElementById("task");
const projectInput = document.getElementById("project");
const deadlineInput = document.getElementById("deadline");
const priorityInput = document.getElementById("priority");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value;
    const project = projectInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <span>${project}</span>
        <span>${deadline}</span>
        <span>${priority}</span>
        <button onclick="completeTask(this)">Complete</button>
    `;
    taskList.appendChild(taskItem);

    // Clear input fields
    taskInput.value = "";
    deadlineInput.value = "";

    // You can save the task data to a database or localStorage here
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
}

// You can add more features and functionality as needed
