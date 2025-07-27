const removeFromArray = function(items, ...itemsToDelete) {
    for (let i = 0; i < items.length; i++) {
        if (itemsToDelete.includes(items[i])) {
            items.splice(i, 1);
            i--;
        }
    }

    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
