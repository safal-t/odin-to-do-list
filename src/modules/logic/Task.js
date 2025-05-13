class Task {
    constructor(name, list, description, dueDate, priority) {
        this.name = name;
        this.list = list || "defaultList";
        this.description = description || '';
        this.dueDate = dueDate || null;
        this.priority = priority || 'Low';
        this.completedStatus = false; 
    }

    returnList() {
        return this.list;
    }

    markCompleted() { 
        this.completedStatus = true;
    }

    toString() {
        return `${this.name}: ${this.description}`;
    }

    returnDetails() {
        return `Task: ${this.name}, List: ${this.list}, Description: ${this.description}, Due Date: ${this.dueDate || 'No due date'}, Priority: ${this.priority}, Completed: ${this.completedStatus}`;
    }
}

function createTask(name, list, description, dueDate, priority) {
    const newTask = new Task(name, list, description, dueDate, priority);
    list.addTask(newTask); 
    return newTask;
}

export default createTask;