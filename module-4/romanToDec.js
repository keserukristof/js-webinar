/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */
function romanToDecimal(roman) {
    if (typeof roman !== "string") {
        throw new Error("Not valid input. Please give a string as parameter.");
    }

    const romanDecimalPairs = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };


    for (let i = 0; i < roman.length; i++) {
        if (!Object.keys(romanDecimalPairs).includes(roman[i])) {
            throw new Error(`The ${roman[i]} at the ${i + 1} character is not valid.`);
        }
    }
    
    if (/(.)\1{3}/.test(roman)) {
        throw new Error("A roman number can not contains four or more of the same character.");
    }


    let sum = 0;
    let currentValue;
    let nextValue;

    for (let i = 0; i < roman.length; i++) {
        currentValue = romanDecimalPairs[roman[i]];
        nextValue = romanDecimalPairs[roman[i + 1]];

        if (currentValue < nextValue) {
            sum -= currentValue;
        } else {
            sum += currentValue;
        }
    }
    return sum;
}
console.log(romanToDecimal("XIIII"))
module.exports = romanToDecimal;