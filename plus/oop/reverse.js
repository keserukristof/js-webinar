/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */
function reverse(o) {
    if (typeof o !== "object") {
        throw new Error("Not object passed!")
    }
    let o2 = {}
    for (let key in o) {
        o2[o[key]] = key;
    }
    return o2
}

module.exports = reverse;