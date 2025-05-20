import "./expand-task.css"

const tasks = document.querySelectorAll(".item-container")
tasks.forEach(element => {
    element.addEventListener("click", () => {
        const details = element.querySelector(".item-details");
        if (details) {
            details.style.display = details.style.display === "none" ? "block" : "none";
        }
    });
});