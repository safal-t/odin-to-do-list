export class Task {
    constructor(name, list, description, dueDate, priority) {
        this.name = name;
        this.list = list || "defaultList"
        this.description = description || '';
        this.dueDate = dueDate || null;
        this.priority = priority || 'Low';
        this.completed = false;
    }

    returnList() {
        return this.list
    }

    completed() {
        this.completed = false;
    }

    toString() {
        return `${this.name}: ${this.description}`;
    }

    returnDetails() {
        return `Task: ${this.name}, List: ${this.list}, Description: ${this.description}, Due Date: ${this.dueDate || 'No due date'}, Priority: ${this.priority}, Completed: ${this.completed}`;
    }
}

export const createTask = function (name, list, description, dueDate, priority) {
    const newTask = new Task(name, list, description, dueDate, priority);
    list.addTask(newTask);
    return newTask;
}