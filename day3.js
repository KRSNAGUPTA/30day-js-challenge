// // Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements

// . Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

const checkSign = (num) => {
  console.log(
    `${
      num > 0
        ? `${num} is positive`
        : num == 0
        ? `${num} is zero`
        : `${num} is negative`
    }`
  );
};
// checkSign(0)

// . Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const eligible = (age) => {
  console.log(
    `${age >= 18 ? `Eligible for casting vote` : `Not Eligible to cast vote`}`
  );
};
// eligible(18)

// Activity 2: Nested If-Else Statements
// . Task 3: Write a program to find the largest of three numbers using nested if-else statements.

const largest = (num1, num2, num3) => {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is largest number`);
    } else {
      console.log(`${num3} is largest number`);
    }
  } else {
    if (num2 > num3) {
      console.log(`${num2} is largest number`);
    } else {
      console.log(`${num3} is largest number`);
    }
  }
};

// largest(10,5,30)

// Activity 3: Switch Case

// . Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const getDay = (day) => {
  switch (day) {
    case 1:
      console.log(`Monday`);
      break;
    case 2:
      console.log(`Tuesday`);
      break;
    case 3:
      console.log(`Wedneday`);
      break;
    case 4:
      console.log(`Thursday`);
      break;
    case 5:
      console.log(`Friday`);
      break;
    case 6:
      console.log(`Saturday`);
      break;
    case 7:
      console.log(`Sunday`);
      break;
    default:
      console.log(`Not valid Day! Please enter in between 1 to 7`);
      break;
  }
};

// getDay(1)
// getDay(2)
// getDay(3)
// getDay(4)
// getDay(5)
// getDay(6)
// getDay(7)
// getDay(8)
// . Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.
const getResult = (marks) => {
  switch (true) {
    case marks >= 80:
      console.log(`You got A grade`);
      break;
    case marks >= 60:
      console.log(`You got B grade`);
      break;
    case marks >= 40:
      console.log(`You got C grade`);
      break;
    case marks >= 30:
      console.log(`You got D grade`);
      break;
    default:
      console.log(`You got F grade.`);
      break;
  }
};

// getResult(79);

// Activity 4: Conditional (Ternary) Operator
// . Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const oddEven = (num) => {
  let res = num % 2 == 0 ? `${num} is even` : `${num} is odd`;
  console.log(res);
};
// oddEven(1);
// oddEven(2);

// Activity 5: Combining Conditions

// . Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the
// result to the console.


const isLeapYear = (year) => {
    let res = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? `Leap Year` : `Not a Leap Year`;
    console.log(res);
}
isLeapYear(2024)