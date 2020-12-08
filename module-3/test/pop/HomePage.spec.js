const HomePage = require("../../pop/HomePage");
const Element = require("../../pop/Element");
const expect = require('chai').expect;


describe('HomePage Class', () => {
    // TODO: write tests
    it('should be defined', () => {
        expect(HomePage).to.be.instanceOf(Function);
    });

    it('should have stored name', () => {
        const homePage = new HomePage('Home', 'https://www.epam.com/', {css: 'body'});

        expect(homePage.name).not.to.be.undefined;
        expect(homePage.name).to.equal('Home');
    });

    it('should have stored url', () => {
        const homePage = new HomePage('Home', 'https://www.epam.com/', {css: 'body'});

        expect(homePage.url).not.to.be.undefined;
        expect(homePage.url).to.equal('https://www.epam.com/');
    });

    it('should have stored locator', () => {
        const homePage = new HomePage('Home', 'https://www.epam.com/', {css: 'body'});

        expect(homePage.locator).not.to.be.undefined;
        expect(homePage.locator.css).to.equal('body');
    });
});

describe("Get header", () => {
    it('should return error if root element does not exists', () => {
        const homePage = new HomePage('Home', 'https://www.epam.com/', {css: 'body'});
        const child = new Element('Header', {css: '.header__content'});

        expect(homePage.getHeader).not.to.be.undefined;
        expect(() => homePage.getHeader(homePage)).to.throw();
    });

    it('should return the element header', () => {
        const homePage = new HomePage('Home', 'https://www.epam.com/', {css: 'body'});
        const child = new Element('Header', {css: '.header__content'});

        homePage.addChildren(child);

        const pElement = homePage.getHeader();

        expect(homePage.getHeader).not.to.be.undefined;
        expect(pElement.locator().css).to.equal('.header__content');
    });
});

describe("Get slider", () => {
    it('should return error if root element does not exists', () => {
        const homePage = new HomePage('Home', 'https://www.epam.com/', {css: 'body'});
        const child = new Element('Slider', {css: '.slider__slide'});

        expect(homePage.getSlider).not.to.be.undefined;
        expect(() => homePage.getSlider(child)).to.throw();
    });

    it('should return the slider', () => {
        const homePage = new HomePage('Home', 'https://www.epam.com/', {css: 'body'});
        const child = new Element('Slider', {css: '.slider__slide'});

        homePage.addChildren(child);

        const pElement = homePage.getSlider();

        expect(homePage.getSlider).not.to.be.undefined;
        expect(pElement.locator().css).to.equal('.slider__slide');
    });
});