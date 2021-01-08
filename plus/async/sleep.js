/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait is over
 *                    or rejects if parameter is not correct
 */
module.exports = function wait(sec) {
    return new Promise((resolve, reject) => {
        if (typeof sec !== "number") {
            reject("sec has to be a number");
        }
        if (sec < 1) {
            reject("sec can not be less than 1");
        }
        if (sec > 10) {
            reject("sec can not be bigger than 10")
        }
        setTimeout(() => resolve(), sec * 1000);
    });
}


