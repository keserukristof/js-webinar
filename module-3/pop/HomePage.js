/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require("./Layout")
const Element = require("./Element")

class HomePage extends Layout{
    constructor(name, url, locator) {
        super("Home page", "https://www.epam.com/", "body");
        const header = new Element("Header", {css: ".header__content"});
        this.addChildren(header);
        const slider = new Element("Slider", {css: ".slider__slide"});
        this.addChildren(slider);
    }
}

module.exports = HomePage;