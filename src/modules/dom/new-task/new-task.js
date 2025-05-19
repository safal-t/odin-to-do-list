import "./new-task.css"
import createTask from "../../logic/Task";
import listManager from "../../logic/List-Manager";

const BUTTON = document.querySelector(".create-task-btn");
const modal = document.createElement("div");
const form = document.createElement("form"); 

modal.classList.add("task-modal", "modal");
modal.style.display = "none"; 
form.classList.add("new-task-form");
form.innerHTML = `
    <div class="form-group">
        <label for="list-name">Name:</label>
        <input type="text" name="list-name" id="list-name">
    </div>
    <div class="form-group">
        <label for="list-category">Category:</label>
        <input type="text" name="list-category" id="list-category">
    </div>
    <div class="form-group">
        <label for="list-description">Description:</label>
        <textarea name="list-description" id="list-description"></textarea>
    </div>
    <div class="form-group">
        <label for="list-due-date">Due Date:</label>
        <input type="date" name="list-due-date" id="list-due-date">
    </div>
    <div class="form-group">
        <label for="list-priority">Priority:</label>
        <select name="list-priority" id="list-priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    </div>
    <div class="form-group">
        <button type="submit">Create Task</button>
        <button type="button" class="close-task-modal-btn">Close</button>
    </div>
`;
modal.append(form);
document.body.append(modal)

form.addEventListener("submit", event => {
    event.preventDefault();
    const name = form.querySelector('#list-name').value.trim();
    const category = form.querySelector('#list-category').value.trim();
    const description = form.querySelector('#list-description').value.trim();
    const dueDate = form.querySelector('#list-due-date').value;
    const priority = form.querySelector('#list-priority').value;

    if (!name) {
        alert("Task name cannot be empty.");
        return;
    }

    // Fetch the list object by name
    const lists = listManager.lists;
    const listObj = lists.find(list => list.listName === category);
    if (!listObj) {
        alert("List not found. Please enter a valid category.");
        return;
    }

    // Pass all form values to createTask, including the list object
    createTask(
        name,
        listObj,
        description,
        dueDate,
        priority
    );

    modal.style.display = "none";
    document.querySelector(".list-container").style.display = "block";
    document.querySelector(".btn-container").style.display = "block";
    form.reset();
});

BUTTON.addEventListener('click', () => {
    modal.style.display = "block";
    document.querySelector(".list-container").style.display = "none";
    document.querySelector(".btn-container").style.display = "none";
})

form.querySelector('.close-task-modal-btn').addEventListener('click', () => {
    modal.style.display = "none";
    document.querySelector(".list-container").style.display = "block";
    document.querySelector(".btn-container").style.display = "block";
    form.reset();
});