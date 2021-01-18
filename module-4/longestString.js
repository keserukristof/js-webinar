/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(strings) {
    if (!Array.isArray(strings)) {
        return "";
    } else {
        return strings.filter(string => typeof string === "string").sort()[0];
    }
}

module.exports = longestString;