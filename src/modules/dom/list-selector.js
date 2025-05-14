const displayOptions = (listManager, container) => {
    container.innerHTML = "";
    const allLists = listManager.lists; 
    console.log(allLists)
    allLists.forEach(element => {
        if (allLists.indexOf(element) !== 0) {
            const buffer = document.createElement("div");
            buffer.className = "list-options-buffer";
            buffer.textContent = "|";
            container.append(buffer)
        }
        const div = document.createElement("div");
        div.className = "list-option-container";
        div.innerText = element.listName;
        div.setAttribute("data-list-name", element.listName);
        container.append(div); 
    });
}

export default displayOptions; 