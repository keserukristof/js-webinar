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

    // return toConvert.trim()
    //                 .replace(/[^a-zA-Z" 1-9]/g, "")
    //                 .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => {
    //                     return idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase();
    //                 })
    //                 .replace(/\s+/g, '');
    const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";

    const words = toConvert.split(" ");
    const cleanedWords = words.map(word => {
        return word.split("").filter(c => {
            return ALLOWED_CHARACTERS.includes(c.toLowerCase());
        }).join("");
    });
    const realWords = cleanedWords.filter(word => word !== "");
    const ucWords = realWords.map((word, i) => {
        if (!i) {
            return word.toLowerCase();
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return ucWords.join("");
}

module.exports = toCamelCase;