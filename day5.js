// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration

// . Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddEven(num) {
  if (num % 2) {
    console.log(`${num} is odd`);
  } else {
    console.log(`${num} is even`);
  }
}
// oddEven(5) //5 is odd

// . Task 2: Write a function to calculate the square of a number and return the result.

function getSquare(num) {
  return num * num;
}
// console.log(getSquare(5));

// Activity 2: Function Expression

// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maxOfNum(num1, num2) {
  console.log(`Max of ${num1} & ${num2} is ${Math.max(num1, num2)}`);
}
// maxOfNum(50,16) //Max of 50 & 16 is 50

// . Task 4: Write a function expression to concatenate two strings and return the result.

function concatenateString(str1, str2) {
  return str1 + str2;
}
// console.log(concatenateString("Hello ", "world")); //Hello world

// Activity 3: Arrow Functions

// . Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const getSum = (num1, num2) => {
  return num1 + num2;
};
// console.log(getSum(5,6));

// . Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkStr = (str, charToCheck) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == charToCheck) {
      return true;
      break;
    }
  }
  return false;
};
// console.log(checkStr("Hiii",'!')); //false
// Activity 4: Function Parameters and Default Values

// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const getProduct = (num1, num2 = 1) => {
  console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`);
};
// getProduct(15) //Product of 15 and 1 is 15

// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet =(name,age = 18)=>{
    return `Hii ${name}, Your age is ${age}`;
}
// console.log(greet("Krishna"));

// Activity 5: Higher-Order Functions

// . Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const repeatGreet =(fn,count)=>{
    while(count--){
        console.log(fn("Krsna"));
    }
}
// repeatGreet(greet,5) 
//Hii Krsna, Your age is 18
// Hii Krsna, Your age is 18
// Hii Krsna, Your age is 18
// Hii Krsna, Your age is 18
// Hii Krsna, Your age is 18


// . Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function
// to the result.

const fistFn =(num)=>{
    return `Got this val ${num} from fn with 3 parameters`
}
const secondFn =(first)=>{
    console.log( `[ ${first}] - got this msg from first function`);
}
const higherOrderFn =(fn1,fn2,val)=>{
    fn2(fn1(val))
}
higherOrderFn(fistFn,secondFn,5)