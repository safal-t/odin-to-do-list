const displayList = list => {
    const container = document.querySelector(".list-container")
    container.innerHTML = "";
    list.tasks.forEach(element => {
        const itemContainer = document.createElement("div");
        const item = document.createElement("input");
        item.type = "checkbox";
        item.id = element.name 

        const label = document.createElement("label")
        label.htmlFor = element.name;
        label.textContent = `${element.name}: ${element.description}`;

        itemContainer.append(item, label)
        container.append(itemContainer)
    });
}

export default displayList;