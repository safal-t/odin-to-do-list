export default class TaskList {
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
        } else {
            console.error('Task not found in the list.');
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