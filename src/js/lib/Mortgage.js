module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }

    get monthlyPayment() {
        // this getter should return the result of your monthly payment calculation
        // used in a previous assignment.
        let P = this.principal;
        let r = (this.interest / 100) / 12;
        let n = this.term *this.period;
    
        let num = r*Math.pow((1+r), n);
        let den = Math.pow((1+r), n) - 1;
        let monthlyPayment = (P*(num/den)).toFixed(2);
        //this.setState({ monthlyPayment: monthlyPayment})

        return monthlyPayment;
      }
  }