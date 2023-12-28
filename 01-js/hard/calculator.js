/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
    this.propStr = "";
    this.operator = "";
  }

  add(a) {
    this.result = this.result + a;
    return this.result;
  }

  substract(a) {
    this.result = this.result - a;
    return this.result
  }

  multiply(a) {
    this.result = this.result * a;
    return this.result;
  }

  divide(a) {
    this.result = this.result / a;
    return this.result;
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
    return this.result;
  }

  calculate_old(str) {
    for (let i = 0; i < str.length; i++) {
      let test = str[i];
      //if char is number or +,-,*,/,(,) parse it,
      //if char is space ignore it, 
      //if char is any other char, throw error.
      if (parseInt(test)) {
        this.tempStr = this.tempStr + test;
      }
      else if (parseInt(test) == 0) {
        this.tempStr = this.tempStr + test;
      }
      else if (test == "+" || test == "-" || test == "*" || test == "/" || test == "(" || test == ")") {
        this.tempStr = this.tempStr + test;
      }
      else if (test == " ") {
        //do nothing
      }
      else {
        throw "Entered invalid data :" + test;
      }
    }
    console.log("tempStr: " + this.tempStr);

    let substring1 = this.tempStr.substring(this.tempStr.lastIndexOf("("))
    console.log(substring1);

    let subString = substring1.substring(substring1.indexOf("("), substring1.indexOf(")") + 1);
    console.log(subString);
    let digitStr = "";
    let flag = false;
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] == "(" || subString[j] == ")") {
        //do nothing
      }
      else {
        if (parseInt(subString[j]) || (parseInt(subString[j]) == '0') & flag == false) {
          digitStr = subString[j];
          flag = true;
        }
        else if (parseInt(subString[j]) || (parseInt(subString[j]) == '0') & flag == true) {
          digitStr = digitStr + substring[j];
          flag = true;
        }
        else if (subString[j] == "+") {
          if (this.operator == "") {
            this.add(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "+") {
            this.add(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "-") {
            this.substract(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "*") {
            this.substract(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "/") {
            this.divide(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          this.operator = "+";
        }
        else if (subString[j] == "-") {
          if (this.operator == "") {
            this.add(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "+") {
            this.add(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "-") {
            this.substract(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "*") {
            this.substract(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          else if (operator == "/") {
            this.divide(parseInt(digitStr));
            digitStr = "";
            flag = false;
          }
          this.operator = "-";
        }
        else if (substring[j] == "*") {

        }
      }

    }


    console.log("result: " + this.result);


  }

  getProperString(str) {
    let str1 = "";
    for (let i = 0; i < str.length; i++) {
      let test = str[i];

      //if char is number or +,-,*,/,(,) parse it,
      //if char is space ignore it, 
      //if char is any other char, throw error.
      if (parseInt(test)) {
        str1 = str1 + test;
      }
      else if (parseInt(test) == 0) {
        str1 = str1 + test;
      }
      else if (test == "+" || test == "-" || test == "*" || test == "/" || test == "(" || test == ")") {
        str1 = str1 + test;
      }
      else if (test == " ") {
        //do nothing
      }
      else {
        throw "Entered invalid data :" + test;
      }
    }
    return str1;
  }

  getCalcStr(str) {
    let substring1 = str.substring(str.lastIndexOf("("))
    console.log(substring1);

    let subString = substring1.substring(substring1.indexOf("(") + 1, substring1.indexOf(")"));
    return subString;
  }

  doCalc(str) {
    let op1, op2;
    let tempResult = 0;

    for (let i = 0; i < str.length; i++) {

      if (str[i] == "+") {
        op1 = str.substring(0, i);
        op2 = str.substring(i + 1);
        if (parseFloat(op1) && parseFloat(op2)) {
          tempResult = parseFloat(op1) + parseFloat(op2)
        }
        if (!parseFloat(op2)) {
          tempResult = this.doCalc(op2);
        }
      }
      else if (str[i] == "-") {
        op1 = str.substring(0, i);
        op2 = str.substring(i + 1);
        if (parseFloat(op1) && parseFloat(op2)) {
          tempResult = parseFloat(op1) - parseFloat(op2);
        }
        if (!parseFloat(op2)) {
          tempResult = this.doCalc(op2);
        }
      }
      else if (str[i] == "*") {
        op1 = str.substring(0, i);
        op2 = str.substring(i + 1);
        if (parseFloat(op1) && parseFloat(op2)) {
          tempResult = parseFloat(op1) * parseFloat(op2);
        }
        if (!parseFloat(op2)) {
          tempResult = this.doCalc(op2);
        }
      }
      else if (str[i] == "/") {
        op1 = str.substring(0, i);
        op2 = str.substring(i + 1);
        if (parseFloat(op1) && parseFloat(op2)) {
          tempResult = parseFloat(parseFloat(op1) / parseFloat(op2));
        }
        if (!parseFloat(op2)) {
          tempResult = this.doCalc(op2);
        }
      }
    }
    return tempResult;
  }

  calculate(str) {
    this.propStr = "(" + this.getProperString(str) + ")";
    console.log(this.propStr);

    for (let i = 0; i < 10; i++) {

      let getCalcStr = this.getCalcStr(this.propStr);
      console.log(getCalcStr);

      let tempSol = this.doCalc(getCalcStr);
      console.log(tempSol);

      this.propStr = this.propStr.replace("(" + getCalcStr + ")", String(tempSol));
      console.log(this.propStr);

    }

  }

}
const calc = new Calculator();
calc.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");

module.exports = Calculator;
