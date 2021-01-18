/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
    if (typeof toConvert !== "string") {
        return "";
    }

    return toConvert.trim()
                    .replace(/[^a-zA-Z" 1-9]/g, "")
                    .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => {
                        return idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase();
                    })
                    .replace(/\s+/g, '');
}

module.exports = toCamelCase;