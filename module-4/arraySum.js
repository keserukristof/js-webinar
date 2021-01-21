/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(elements) {
    let sum = 0;

    if (!Array.isArray(elements)) {
        return sum;
    }

    elements.forEach(element => {
        if (Array.isArray(element)) {
            sum += arraySum(element);
        } else if (typeof element === "number") {
            sum += element;
        }
    });

    return sum;
}

module.exports = arraySum;