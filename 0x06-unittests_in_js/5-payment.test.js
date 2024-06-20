const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("use spyfor each test", function() {
	sinon.spy(console, "log");
    });
    afterEach("spy returned for each test", function() {
	console.log.restore();
    });
    it("right argument call ", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("right argument call", function() {
	sendPaymentRequestToApi(120, 40);

	expect(console.log.withArgs("The total is: 160").calledOnce).to.be.true;
    });
});
