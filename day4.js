// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop

// . Task 1: Write a program to print numbers from 1 to 10 using a for loop.
const forLoop = () => {
  for (let index = 1; index <= 10; index++) {
    console.log(index);
  }
};
// forLoop()

// . Task 2: Write a program to print the multiplication table of 5 using a for loop.
const multiplicationTable = (num) => {
  for (let index = 1; index <= 10; index++) {
    console.log(`${num} * ${index} = ${num * index}`);
  }
};
// multiplicationTable(5)

// Activity 2: While Loop

// . Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

const whileLoop = (start, end) => {
  let sum = 0;
  let i = start;
  while (i < end) {
    sum += i;
    i++;
  }
  console.log(`Sum of numbers from ${start} to ${end} is ${sum}`);
};
// whileLoop(1,10)

// . Task 4: Write a program to print numbers from 10 to 1 using a while loop.

const decendingPrint = (start, end) => {
  let i = start;
  while (i >= end) {
    console.log(i);
    i--;
  }
};
// decendingPrint(10,1)

// Activity 3: Do ... While Loop

// . Task 5: Write a program to print numbers from 1 to 5 using a do ... while loop.
const doWhile = (start, end) => {
  let i = start;
  do {
    console.log(i);
    i++;
  } while (i <= end);
};
// doWhile(1, 5);

// . Task 6: Write a program to calculate the factorial of a number using a do ... while loop.
const factorial = (num) => {
  let res = 1;
  if (num == 0) {
    console.log(`Factorial of 0 is 1`);
    return;
  }
  let i = num;
  while (i >= 1) {
    res *= i;
    i--;
  }
  console.log(`Factorial of ${num} is ${res}`);
};
// factorial(3);

// Activity 4: Nested Loops

// . Task 7: Write a program to print a pattern using nested for loops:

// *
// **
// ***
// ****
// *****

const printPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
};
// printPattern(5);

// Activity 5: Loop Control Statements

// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

const useContinue = (start, end, continueNum) => {
  for (let i = start; i <= end; i++) {
    if (i == continueNum) {
        continue;
    } else {
        console.log(i);
    }
  }
};

// useContinue(1,10,5)

// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
const useBreak = (start, end, breakNum) => {
    for (let i = start; i <= end; i++) {
      if (i == breakNum) {
          break;
      } else {
          console.log(i);
      }
    }
  };
  
  useBreak(1,10,7)