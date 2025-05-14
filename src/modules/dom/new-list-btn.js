const BUTTON = document.querySelector(".create-list-btn");
import listManager from "../logic/List-Manager";
import displayOptions from "./display-options";

BUTTON.addEventListener('click', () => {
    listManager.addList('newList');
    displayOptions(listManager);
})