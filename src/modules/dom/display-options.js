import listManager from "../logic/List-Manager";
import displayList from "./display-list";

const CONTAINER = document.querySelector('.list-options-container');

const displayOptions = () => {
    CONTAINER.innerHTML = "";
    const allLists = listManager.lists; 
    allLists.forEach(element => {
        if (allLists.indexOf(element) !== 0) {
            const buffer = document.createElement("div");
            buffer.className = "list-options-buffer";
            buffer.textContent = "|";
            CONTAINER.append(buffer)
        }
        const div = document.createElement("div");
        div.className = "list-option-container";
        div.innerText = element.listName;
        div.setAttribute("data-list-name", element.listName);
        div.addEventListener("click", () => {
            displayList(element);
        })
        CONTAINER.append(div); 
    });
}

export default displayOptions; 