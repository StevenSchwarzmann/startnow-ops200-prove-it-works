import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mortgage Calculator</h1>

        <input className='principle' name='principle' placeholder="Principle" value="principle"/>/

        <input className="interestRate" name="interestRate" placeholder="Balance"/>

        <input className="loanTerm" name="loanTerm" placeholder="Loan Term"/>

        <select className="period" name="period">
          <option value="12">Monthly</option>
          <option value="4">Quarterly</option>
        </select>

        <button id='calculate'>Calculate</button>

        <p id='output'></p>

      </div>
    );
  }
}
