/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
function arraySorted(items) {
    if (!Array.isArray(items)) {
        console.warn("The items is not an array. Please give an array as parameter.");
        return false;
    }

    const clearItems = items.map(item => {
        if (typeof item === "string") {
            return item.replace(/[^a-zA-Z]/g, "").toLowerCase();
        } else {
            return item;
        }
    });

    const sortedCleanItems = clearItems.slice().sort()

    for (let i = 0; i < items.length; i++) {
        if (clearItems[i] !== sortedCleanItems[i]) {
            return false;
        }
    }

    return true;
}

module.exports = arraySorted;