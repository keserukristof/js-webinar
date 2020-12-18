const HomePage = require("../../pop/HomePage");
const Element = require("../../pop/Element");
const expect = require('chai').expect;


describe('HomePage Class', () => {
    // TODO: write tests
    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('should have stored name', () => {
        const homePage = new HomePage();

        expect(homePage.name).not.to.be.undefined;
        expect(homePage.name).to.equal('Home page');
    });

    it('should have stored url', () => {
        const homePage = new HomePage();

        expect(homePage.url).not.to.be.undefined;
        expect(homePage.url).to.equal('https://www.epam.com/');
    });

    it('should have stored locator', () => {
        const homePage = new HomePage();

        expect(homePage.locator).not.to.be.undefined;
        expect(homePage.locator).to.equal('body');
    });
});

describe("Get header", () => {
    it('should return error if root element does not exists', () => {
        const homePage = new HomePage();

        expect(homePage.get()).not.to.be.undefined;
        expect(() => homePage.get("Not home page")).to.throw();
    });

    it('should return the element header', () => {
        const homePage = new HomePage();

        const pElement = homePage.get("Header");

        expect(homePage.get()).not.to.be.undefined;
        expect(pElement.locator().css).to.equal('.header__content');
    });

    it('should throw error if I try to add existing element', () => {
        const homePage = new HomePage();
        const header = new Element("Header", {css: ".header__content"});

        expect(homePage.addChildren).not.to.be.undefined;
        expect(() => homePage.addChildren(header)).to.throw();
    })
});

describe("Get slider", () => {
    it('should return error if root element does not exists', () => {
        const homePage = new HomePage();

        expect(homePage.get()).not.to.be.undefined;
        expect(() => homePage.get("Not slider")).to.throw();
    });

    it('should return the slider', () => {
        const homePage = new HomePage();

        const pElement = homePage.get("Slider");

        expect(homePage.get()).not.to.be.undefined;
        expect(pElement.locator().css).to.equal('.slider__slide');
    });

    it('should throw error if I try to add existing element', () => {
        const homePage = new HomePage();
        const slider = new Element("Slider", {css: ".slider__slide"});

        expect(homePage.addChildren).not.to.be.undefined;
        expect(() => homePage.addChildren(slider)).to.throw();
    })
});