import './styles.css';
import createTask from './modules/logic/Task.js';
import createList from './modules/logic/Task-List.js';
import displayList from './modules/dom/display-list/display-list.js';
import listManager from './modules/logic/List-Manager.js';
import displayOptions from './modules/dom/display-options.js';
import "./modules/dom/new-list-btn/new-list-btn.js";
import "./modules/dom/new-task/new-task.js";
import "./modules/dom/change-list/change-list.js";
import "./modules/dom/expand-task/expand.task.js"

const defaultList = createList("defaultList");
createTask('First Task', defaultList, 'this is an auto-generated task', '00/00/00', 'medium');
displayList(defaultList);
displayOptions(); 