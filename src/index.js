import './styles.css'
import createTask from './modules/logic/Task.js';
import TaskList from './modules/logic/Task-List.js';
import displayList from './modules/dom/display-list.js';

const defaultList = new TaskList
const firstTask = createTask('First Task', defaultList, 'this is an auto-generated task', '00/00/00', 'medium');
const secondTask = createTask('Second Task', defaultList, 'this is another auto-generated task', '01/01/01', 'high');
const thirdTask = createTask('Third Task', defaultList, 'yet another auto-generated task', '02/02/02', 'low');
const fourthTask = createTask('Fourth Task', defaultList, 'final auto-generated task', '03/03/03', 'medium');

displayList(defaultList);