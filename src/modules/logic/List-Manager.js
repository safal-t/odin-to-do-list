import displayOptions from "../dom/display-options";

const listManager = (() => {
    const allLists = [];

    const addList = (list) => {
        allLists.push(list);
        displayOptions()
    };

    const removeList = list => {
        allLists.splice(findListIndex(list), 1)
        displayOptions()
    }

    const findListIndex = (list) => {
        const index = allLists.indexOf(list); 
        if (index === -1) {
            console.error("list does not exist");
            return -1; 
        }
        return index;
    };

    const returnList = (name) => {
        const list = allLists.find(list => list.listName === name);
        if (!list) {
            console.error(`List with name "${name}" does not exist`);
            return null;
        }
        return list;
    };

    const returnAllLists = () => {
        return allLists;
    };

    return {
        addList,
        removeList,
        findListIndex,
        returnList,
        get lists() {
            return returnAllLists();
        }
    }
})();

export default listManager;