import "./new-list-btn.css";
import listManager from "../../logic/List-Manager.js"
import displayOptions from "../display-options.js";
import createList from "../../logic/Task-List.js";

const BUTTON = document.querySelector(".create-list-btn");
const modal = document.createElement("div");
const form = document.createElement("form"); 

modal.classList.add("modal", "list-modal");
modal.style.display = "none"; 
form.classList.add("new-list-form");
form.innerHTML = `
    <label for="list-name">Name:</label>
    <input type="text" name="list-name" id="list-name">
    <button type="submit">Create List</button>
    <button type="button" class="close-modal-btn">Close</button>
`;
modal.append(form);
document.body.append(modal)

form.addEventListener("submit", event => {
    event.preventDefault();
    const name = form.querySelector('#list-name').value.trim();
    if (!name) {
        alert("List name cannot be empty.");
        return;
    }
    createList(name);
    modal.style.display = "none";
    document.querySelector(".list-container").style.display = "block";
    document.querySelector(".btn-container").style.display = "block";
    form.reset();
})

BUTTON.addEventListener('click', () => {
    modal.style.display = "block";
    document.querySelector(".list-container").style.display = "none";
    document.querySelector(".btn-container").style.display = "none";
})

form.querySelector('.close-modal-btn').addEventListener('click', () => {
    modal.style.display = "none";
    document.querySelector(".list-container").style.display = "block";
    document.querySelector(".btn-container").style.display = "block";
    form.reset();
});