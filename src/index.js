import './styles.css'
import createTask from './modules/logic/Task.js';
import TaskList from './modules/logic/Task-List.js';

const defaultList = new TaskList
const firstTask = createTask('First Task', defaultList, 'this is a auto generated task', '00/00/00', 'medium');
