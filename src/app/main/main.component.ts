import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  result: any = 0;
  input: any = 0;
  firstNum: number = 0;
  secondNum: number = null;
  firstValue: boolean = true;
  operatorSelected: Operator = Operator.clear;
  inputData: any = "";
  constructor() { }

  ngOnInit() { }

  // Get Solution
  solution() {
    if (this.secondNum == null) {
      return 0
    }
    switch (this.operatorSelected) {
      case Operator.minus:
        this.getResult(this.firstNum - this.secondNum)
        break;
      case Operator.multiply:
        let res = this.firstNum * this.secondNum;

        this.getResult(this.firstNum * this.secondNum)
        break;
      case Operator.divide:
        this.getResult(this.firstNum / this.secondNum)
        break;
      case Operator.plus:
        this.getResult(this.firstNum + this.secondNum)
        break;
    }
    this.firstNum = this.result;
    this.secondNum = null;
  }

  // Insert Operator
  insertOperator(operator: any) {
    switch (operator) {

      case Operator.minus:
        this.operatorSelected = Operator.minus
        this.inputData += " - ";
        this.firstValue = false
        break;
      case Operator.multiply:
        this.operatorSelected = Operator.multiply
        this.inputData += " * ";
        this.firstValue = false
        break;
      case Operator.divide:
        this.operatorSelected = Operator.divide
        this.inputData += " / ";
        this.firstValue = false
        break;

      case Operator.plus:
        this.operatorSelected = Operator.plus
        this.inputData += " + ";
        this.firstValue = false
        break;
      case Operator.clear:
        this.reset();
        break;
      case Operator.dot:
        // Todo
        break;

    }
    if (this.operatorSelected != Operator.clear) {
      this.solution();
    }
  }

  // Reset Default Value
  reset() {
    this.firstNum = 0;
    this.secondNum = null;
    this.result = 0;
    this.inputData = "";
    this.firstValue = true;
    this.operatorSelected = Operator.clear;
  }

  // Insert Character
  insertChar(insertNumber: any) {

    this.inputData += "" + insertNumber;
    if (this.firstValue) {
      const newValue = this.firstNum * 10 + insertNumber;
      if (newValue < 1000000) {
        this.firstNum = newValue;
        this.getResult();
      }
    }
    else {
      const newValue = this.secondNum * 10 + insertNumber;
      if (newValue < 1000000) {
        this.secondNum = newValue;
        this.getResult();
      }
    }

  }

  //Display Result
  getResult(params?: number) {
    this.result = 0;
    if (this.firstValue) {
      this.result = this.firstNum;
    }
    if (!this.firstValue) {
      this.result = this.secondNum;
    }
    if (params || params == 0) {
      this.result = params;
    }
  }

  // KEYBOARD SUPPORT
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    event.preventDefault();

    if (key === 'c' || key === 'backspace') {
      this.reset();
    } else if (key === ',' || key === '.') {
      this.insertChar('.'); 555
    } else if (!isNaN(parseInt(key))) {
      this.insertChar(parseInt(key));
    } else if (key === 'enter') {
      this.solution();
    } else if (this.isOperator(key)) {
      const keyPress = this.numericKey(key);
      this.insertOperator(keyPress);
    }
  }

  //Convert Operator into String
  numericKey(key: any) {
    switch (key) {
      case '-':
        return Operator.minus;
      case "*":
        return Operator.multiply;
      case "/":
        return Operator.divide;
      case "+":
        return Operator.plus;
    }
  }

  //Verify Operator
  isOperator(token: string): token is Operator {
    return token === '-' || token === '+' || token === '*' || token === '/';
  }
}






export enum Operator {
  divide = 'divide',
  multiply = 'multiply',
  minus = 'minus',
  add = 'add',
  plus = 'plus',
  clear = 'clear',
  dot = 'dot',
}
