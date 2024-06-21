const request = require('request');
const expect = require('chai').expect;

describe("get page", function() {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    }

    it("working status", function(done) {
        request(options, function(err, res, body) {
            if (err) return done(err);
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("right thing displayed", function(done) {
        request(options, function(err, res, body) {
            if (err) return done(err);
            expect(body).to.contain("Welcome to the payment system");
            done();
        });
    });

    it("is it the right amount", function(done) {
        request(options, function(err, res, body) {
            if (err) return done(err);
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
});

