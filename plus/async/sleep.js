/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait is over
 *                    or rejects if parameter is not correct
 */
module.exports = function wait(sec) {
    return new Promise((resolve, reject) => {
        if (typeof sec === "number" && sec > 1) {
            if (sec > 10) {
                sec = 10;
            }
            setTimeout(resolve, sec * 1000);
        } else {
            reject();
        }
    });
}