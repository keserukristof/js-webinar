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
    }

    const filteredStrings = strings.filter(string => typeof string === "string");

    let longestStr = "";
    for (const string of filteredStrings) {
        if (string.length > longestStr.length) {
            longestStr = string;
        }
        if (string.length === longestStr.length) {
            longestStr = [string, longestStr].sort()[0]
        }
    }
    return longestStr;
}

module.exports = longestString;