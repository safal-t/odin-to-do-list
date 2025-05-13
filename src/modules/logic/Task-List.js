class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.getTaskIndex(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true; // Indicate successful removal
        } else {
            console.warn('Task not found in the list.');
            return false; // Indicate failure
        }
    }

    getTaskIndex(task) {
        return this.tasks.indexOf(task);
    }

    getList() {
        return this.tasks;
    }

    hasTask(task) {
        return this.getTaskIndex(task) !== -1;
    }
}

export default TaskList;