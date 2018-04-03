const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');



describe('Mortgage Calculator', () => {
    
    it('should be able to calculate Mortgage', () => {
        expect(Mortgage).to.exist;
    });

    it('Should calculate mortgage correctly', () => {
        let mortgage = new Mortgage(420000, 3.75, 30, 12);
        let payment = mortgage.monthlyPayment;
        expect(payment).to.equal('1945.09', 'Expected mortgage payment didn\'t match');
    });

    it('Should calculate mortgage correctly', () => {
        let mortgage = new Mortgage(670000, 4.25, 15, 12)
        let payment = mortgage.monthlyPayment;
        expect(payment).to.equal('5040.27', 'Expected mortgage payment didn\'t match');
    });

    it('Should calculate mortgage correctly', () => {
        let mortgage = new Mortgage( 1000000, 4.55, 30, 12);
        let payment = mortgage.monthlyPayment;
        expect(payment).to.equal('5096.61', 'Expected mortgage payment didn\'t match');
    })
});