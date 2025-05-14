import './styles.css';
import createTask from './modules/logic/Task.js';
import createList from './modules/logic/Task-List.js';
import displayList from './modules/dom/display-list.js';
import listManager from './modules/logic/List-Manager.js';
import displayOptions from './modules/dom/display-options.js';


const defaultList = createList("defaultList");
const testList = createList("testList");


createTask('First Task', defaultList, 'this is an auto-generated task', '00/00/00', 'medium');
createTask('Second Task', defaultList, 'this is another auto-generated task', '01/01/01', 'high');
createTask('Third Task', defaultList, 'yet another auto-generated task', '02/02/02', 'low');
createTask('Fourth Task', defaultList, 'final auto-generated task', '03/03/03', 'medium');

displayList(defaultList);
displayList(testList); 

displayOptions(listManager, document.querySelector('.list-options-container')); 