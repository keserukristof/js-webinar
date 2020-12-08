/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require("./Layout")
const { element } = require("../test/mock/ElementFinder")

class HomePage extends Layout{
    constructor(name, url, locator) {
        super(name, url, locator);
    }

    getHeader() {
        if (this.children.hasOwnProperty("Header")) {
            return element(this.children["Header"].locator);
        } else {
            throw new Error("Header is not found!");
        }
    }

    getSlider(parentElement) {
        if (this.children.hasOwnProperty("Slider")) {
            return element(this.children["Slider"].locator);
        } else {
            throw new Error("Slider is not found!");
        }
    }
}

module.exports = HomePage;