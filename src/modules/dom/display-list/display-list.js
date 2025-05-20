import "./display-list.css"

const displayList = list => {
    const container = document.querySelector(".list-container")
    container.innerHTML = "";
    list.tasks.forEach(element => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item-container";

        const textContainer = document.createElement("div");
        textContainer.className = "text-container";

        const heading = document.createElement("div");
        heading.textContent = element.name;
        heading.className = "item-heading";

        const description = document.createElement("div");
        description.textContent = element.description;
        description.className = "item-description";

        // Details div (initially hidden)
        const details = document.createElement("div");
        details.className = "item-details";
        details.style.display = "none"; // Hidden by default
        details.textContent = `Date: ${element.dueDate || "N/A"}`;

        // Toggle details on textContainer click
        textContainer.addEventListener("click", () => {
            details.style.display = details.style.display === "none" ? "block" : "none";
        });

        // Set priority background color
        if (element.priority === "low") {
            itemContainer.style.backgroundColor = "green";
        } else if (element.priority === "medium") {
            itemContainer.style.backgroundColor = "yellow";
        } else if (element.priority === "high") {
            itemContainer.style.backgroundColor = "red";
        }

        textContainer.append(heading, description);

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "done";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => {
            // Remove the task from the list
            const index = list.tasks.indexOf(element);
            if (index > -1) {
                list.tasks.splice(index, 1);
                displayList(list); // Re-render the list
            }
        });

        // Arrange text, details, and button
        itemContainer.append(textContainer, deleteButton);
        itemContainer.append(details);
        container.append(itemContainer);
    });
}

export default displayList;