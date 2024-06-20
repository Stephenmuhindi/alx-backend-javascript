const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 3, 2)).to.equal(5);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 4.8, 3.2)).to.equal(8);
	});
    });
    describe("SUBTRACT", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", 9.4, 2.4)).to.equal(7.0);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", 2.9, 8.9)).to.equal(-6);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", -7.9, -2.9)).to.equal(-5);
	});
    });
    describe("DIVIDE", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 15, 5)).to.equal(3);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 4.6, -2.3)).to.equal(-2.5);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
	});
    });
});
