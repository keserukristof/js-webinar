/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */
class Circle {
    constructor(r) {
        if (typeof r != "number") {
            throw new Error("Not valid number!")
        }
        if (r < 0) {
            throw new Error("Radius cannot be less than zero!")
        }
        this.r = r
    }

    getPerimeter() {
        return 2 * this.r * Math.PI;
    }

    getArea() {
        return Math.pow(this.r, 2) * Math.PI;
    }
}

module.exports = Circle;