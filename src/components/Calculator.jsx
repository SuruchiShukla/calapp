import React, { Component } from "react";
import Button from './Button';
import Input from './Input';
import FirstRow from './FirstRow';
import LastRow from './LastRow';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = val => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  plusMinus = val => {
    if (this.state.input <= "0") {
      this.setState({ input: (-1 * (this.state.input)) });
    } if (this.state.input >= "0") {
      this.setState({ input: (-1 * (this.state.input)) });
    }
  }

  percentage = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "percentage";
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    /////////////////Comma Seperation For Result//////////////
    const format_number = function (number, prefix, thousand_separator, decimal_separator) {
      thousand_separator = thousand_separator || ',';
      decimal_separator = decimal_separator || '.';
      const regex = new RegExp('[^' + decimal_separator + '\\d]', 'g');
      let number_string = number.toString().replace(regex, '').toString();
      let split = number_string.split(decimal_separator);
      const thousands = split[0].toString()
        .split('').reverse().map((digit, index) => {
          return (index > 0 && index % 3 === 0) ? digit + ',' : digit;
        }).reverse().join('');  
      let result = split[1] !== undefined ? thousands + decimal_separator + split[1] : thousands;
      return prefix === undefined ? result : (result ? prefix + result : '');
    }
    ///////////////// For Addition//////////////
    if (this.state.operator === "plus") {
      this.setState({
        input: format_number(parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber))
      });
    } 
    ///////////////// For Substraction//////////////
    else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    }
    ///////////////// For Multiplication//////////////
    else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } 
    ///////////////// For Division//////////////
    else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    } 
    ///////////////// For Percentage//////////////
    else if (this.state.operator === "percentage") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          (parseInt(this.state.currentNumber) / 100)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <FirstRow handleClick={this.clearInput}>C</FirstRow>
            <FirstRow handleClick={this.plusMinus}>+/-</FirstRow>
            <FirstRow handleClick={this.percentage}>%</FirstRow>
            <Button handleClick={this.divide}>÷</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.multiply}>×</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <LastRow handleClick={this.evaluate}>=</LastRow>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;