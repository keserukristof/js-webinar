const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    // TODO: code coverage!
    it("should return a number", () => {
        return expect(calc(3).v).to.be.a('number');
    });

    it("should be able to add a number to the current value", () => {
        return expect(calc(3).v).to.equal(3);
    });

    describe("add", () => {
        it("should exist", () => {
           return expect(calc().add).not.to.be.undefined;
        });

        it("should be able to add a number to the current value", () => {
            return expect(calc(3).add(5).v).to.equal(8);
        });

        it("should return the sum of the input numbers, in case of negative numbers", () => {
            return expect(calc(-8).add(-2).v).to.equal(-10);
        });

        it("should return the sum of the input numbers, in case of fractional numbers", () => {
            return expect(calc(1.5).add(2.7).v).to.equal(4.2);
        });
    });

    describe("minus", () => {
        it("should exist", () => {
            return expect(calc().minus).not.to.be.undefined;
        });

        it("should be able to substract a number from the current value", () => {
            return expect(calc(3).minus(2).v).to.equal(1);
        });

        it("should be able to substract a number from the current value, in case of negative numbers", () => {
            return expect(calc(-3).minus(-5).v).to.equal(2);
        });

        it("should be able to substract a number from the current value, in case of fractional numbers", () => {
            return expect(calc(-3.5).minus(-0.6).v).to.equal(-2.9);
        });
    });

    describe("root", () => {
        it("should exist", () => {
            return expect(calc().sqrt).not.to.be.undefined;
        });

        it("should return the root of the current value", () => {
            return expect(calc(4).sqrt().v).to.equal(2);
        });

        it("should throw error if negative number passed", () => {
            return expect(() => calc(-1).sqrt().to.throw());
        });

        it("should return the root of the current value, in case of 0", () => {
            return expect(calc(0).sqrt().v).to.equal(0);
        });

        it("should return the root of the current value, in case of fractional numbers", () => {
            return expect(calc(1.21).sqrt().v).to.equal(1.1);
        });
    });

    describe("multiple", () => {
        it("should exist", () => {
            return expect(calc().times).not.to.be.undefined;
        });

        it("should be able to multiply the current value by a number", () => {
            return expect(calc(3).times(10).v).to.equal(30);
        });

        it("should be able to multiply the current value by a number, in case of negative numbers", () => {
            return expect(calc(-4).times(11).v).to.equal(-44);
        });

        it("should be able to multiply the current value by a number, in case of fractional numbers", () => {
            return expect(calc(1.3).times(5.1).v).to.equal(6.63);
        });
    });

    describe("divide", () => {
        it("should exist", () => {
            return expect(calc().divide).not.to.be.undefined;
        });

        it("should be able to divide the current value by a number", () => {
            return expect(calc(10).divide(2).v).to.equal(5);
        });

        it("should throw error if the given number is 0", () => {
            return expect(() => calc(10).divide(0).to.throw());
        });

        it("should be able to divide the current value by a number, in case of negative numbers", () => {
            return expect(calc(-5).divide(-2).v).to.equal(2.5);
        });

        it("should be able to divide the current value by a number, in case of fractional numbers", () => {
            return expect(calc(4.5).divide(2.25).v).to.equal(2);
        });
    });

    describe("modulo", () => {
        it("should exist", () => {
            return expect(calc().modulo).not.to.be.undefined;
        });

        it("should be able to get the modulo of the current value by a number, in case of negative numbers", () => {
            return expect(calc(-60).modulo(-7).v).to.equal(-4);
        });

        it("should be able to get the modulo of the current value by a number, in case of fractional numbers", () => {
            return expect(calc(1.1).modulo(1.05).v).to.be.closeTo(0.05, 0.001);
        });
    });

    describe("convert to string", () => {
        it('should convert the result of the calculation to string', () => {
            return expect(calc(1).toString()).to.be.a("string");
        });

        it('should return the correct result of the calculation in string format', () => {
            return expect(calc(1).toString()).to.equal("1");
        });
    })

    describe("complex calculation", () => {
        it("should return the expected result of the calculation", () => {
            return expect(calc(3).add(4)
                                    .minus(3)
                                    .times(6).v).to.equal(24);
        });

        it("should return the expected result of the calculation, in case of negative numbers", () => {
            return expect(calc(3).add(-6)
                                    .minus(-1)
                                    .times(-3).v).to.equal(6);
        });

        it("should return the expected result of the calculation, in case of fractional numbers", () => {
            return expect(calc(0.5).add(1.5)
                                      .minus(1.5)
                                      .times(0.5).v).to.equal(0.25);
        });
    });
});