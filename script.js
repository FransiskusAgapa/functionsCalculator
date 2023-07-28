let displayVal = document.querySelector("#display");
console.log(displayVal.innerText);
let bannedVal = -Infinity;
let tempVal = "";
let leftVal = -Infinity; // left value to calculate
let rightVal = bannedVal; // right value to calculate
let operationToDo = []; // if desired
let rightUpdated = false;
// change value on display to whatever button is pressed
function press(val) {
  console.log(displayVal.innerText);
  if (val == ".") {
    tempVal += ".";
  } else {
    tempVal += val;
    displayVal.innerText = Number(tempVal);
  }

  // console.log(`=In press=`);
  // console.log(`temp val: ${tempVal} - ${typeof tempVal}`);
  // console.log(`left val: ${leftVal} - ${typeof leftVal}`);
  // console.log(`right val: ${rightVal} - ${typeof rightVal}`);
}

// clear the display to 0
function clr() {
  console.log("C - reset");
  displayVal.innerText = 0;

  bannedVal = -Infinity;
  tempVal = "";
  leftVal = -Infinity;
  rightVal = bannedVal;

  // console.log(`=In clr=`);
  // console.log(`temp val: ${tempVal} - ${typeof tempVal}`);
  // console.log(`left val: ${leftVal} - ${typeof leftVal}`);
  // console.log(`right val: ${rightVal} - ${typeof rightVal}`);
}

// Identify operation
function setOP(op) {
  operationToDo.push(op);

  // update Pre Operation Sign
  if (leftVal == -Infinity) {
    console.log("update left");
    leftVal = Number(tempVal);
    tempVal = "";
  } else if (rightUpdated) {
    console.log("update right");
    rightVal = Number(tempVal);
    tempVal = "";
  }

  // console.log(`=In setOp=`);
  // console.log(`temp val: ${tempVal} - ${typeof tempVal}`);
  // console.log(`left val: ${leftVal} - ${typeof leftVal}`);
  // console.log(`right val: ${rightVal} - ${typeof rightVal}`);
}

// Calculate inputs
function calculate() {
  console.log("calculate here");
  let popOp = operationToDo.pop(); // destruct n assign

  // update Post Operation Sign
  if (leftVal != -Infinity) {
    console.log("update right");
    rightVal = Number(tempVal);
    tempVal = "";
    rightUpdated = true;
  }

  // console.log(`=In calculate=`);
  // console.log(`temp val: ${tempVal} - ${typeof tempVal}`);
  // console.log(`left val: ${leftVal} - ${typeof leftVal}`);
  // console.log(`right val: ${rightVal} - ${typeof rightVal}`);

  if (popOp == "+") {
    console.log("Add");
    console.log(`leftVal + rightVal =`, leftVal + rightVal);

    displayVal.innerText = leftVal + rightVal;
    leftVal = Number(displayVal.innerText);
    bannedVal = displayVal.innerText;
  } else if (popOp == "-") {
    console.log("Subtract");
    console.log(`leftVal - rightVal =`, leftVal - rightVal);
    displayVal.innerText = leftVal - rightVal;
    leftVal = Number(displayVal.innerText);
    bannedVal = displayVal.innerText;
  } else if (popOp == "*") {
    console.log("Multiply");
    console.log(`leftVal * rightVal = `, leftVal * rightVal);
    displayVal.innerText = leftVal * rightVal;
    leftVal = Number(displayVal.innerText);
    bannedVal = displayVal.innerText;
  } else if (popOp == "/") {
    console.log("Divide");
    console.log(`leftVal / rightVal =`, leftVal / rightVal);
    displayVal.innerText = Math.round(leftVal / rightVal);
    leftVal = Number(displayVal.innerText);
    bannedVal = displayVal.innerText;
  }
}
