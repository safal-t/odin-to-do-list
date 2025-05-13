const listManager = (() => {
    const allLists = [];

    const addList = (list) => {
        allLists.push(list);
    };

    const removeList = list => {
        allLists.splice(findListIndex(list), 1)
    }

    const findListIndex = (list) => {
        const index = allLists.indexOf(list); // Fixed: Removed `this`
        if (index === -1) {
            console.error("list does not exist");
            return -1; // Explicitly return -1 for invalid cases
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
        returnAllLists,
    };
})();

export default listManager;