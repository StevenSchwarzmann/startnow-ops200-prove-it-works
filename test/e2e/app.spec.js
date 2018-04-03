const express = require("express");
const expect = require("chai").expect;
const path = require("path");
const Nightmare = require("nightmare");

const app = express();

app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../dist")));

const url = "http://localhost:8888";

const nightmare = new Nightmare({ open: true });

describe("End to End Tests", () => {
  let httpServer = null;
  let pageObject = null;

  before(done => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after(done => {
    httpServer.close();
    done();
  });

  it("should contain a <h1> element for the page title", (done) => {
    pageObject
      .evaluate(() => document.querySelector("h1").innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal("Mortgage Calculator");
        done();
      }).catch(done);
  });

  it("should contain an <input> element for the principle", (done) => {
    pageObject
      .evaluate(() => document.querySelector("input[name=principle]"))
      .then(input => {
        console.log("----- Input is ", input);
        expect(input).to.not.be.null;
        // expect(input).to.equal("principle");
        done();
      }).catch(done);
  });

  it("should contain an <input> element for the interest rate", (done) => {
    pageObject
      .evaluate(() => document.querySelector("input[name=interestRate]")
      )
      .then(interest => {
        expect(interest).to.not.be.null;
        // expect(interest).to.equal("interestRate");
        done();
      }).catch(done);
  });

  it("should contain an <input> element for the loan term", (done) => {
    pageObject
      .evaluate(() => document.querySelector("input[name=loanTerm]"))
      .then(term => {
        expect(term).to.not.be.null;
        // expect(term).to.equal("loanTerm");
        done();
      }).catch(done);
  });

  it("should contain an <select> element for the period", (done) => {
    pageObject
      .evaluate(() => document.querySelector("select[name=period]").value)
      .then(select => {
        expect(select).to.not.be.null;
        expect(select).satisfy(sel => sel === "12" || sel === "4");
        done();
      }).catch(done);
  });

  it("should contain a <button> element for the calculation", (done) => {
    pageObject
      .evaluate(() => document.querySelector("button[id=calculate]"))
      .then(calculate => {
        expect(calculate).to.exist;
        done();
      }).catch(done);
  });

  it("Should output the correct calculation inside of a <p> element", (done) => {
    pageObject
      .evaluate(() => document.querySelector("p[id=output]"))
      .then(output => {
        expect(output).to.exist;
        done();
      }).catch(done);

  it('should correctly calculate mortgageOOOOOOOOOOO%', () =>
      pageObject
      .wait()
      .type('input[name=principal]', 300000)
      .type('input[name=interestRate]', 3.75)
      .type('input[name=loanTerm]', 30)
      .select('select[name=period]', 12)
      .click('button#calculate')
      .wait('#output')
      .evaluate(() => document.querySelector('#output').innerText)
      .then((outputText) => {
        expect(outputText).to.equal('$1389.35');
      })
    ).timeout(6500);
  });
});
