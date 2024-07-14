// Activity 1 :
// task 1
const addNum = (num1, num2) => {
  console.log(`addition of ${num1} & ${num2} is ${num1 + num2}`);
};
// addNum(5,6);

// Task 2
const subtractNum = (num1, num2) => {
  console.log(`Subtracting ${num2} from ${num1} we get ${num1 - num2}`);
};
// subtractNum(5,6)

// Task 3
const multiplyNum = (num1, num2) => {
  console.log(`Multiplying of ${num1} & ${num2} is ${num1 * num2}`);
};
// multiplyNum(5,6)

// Task 4
const divideNum = (num1, num2) => {
  console.log(
    `Deviding ${num1} with ${num2} we get ${(num1 / num2).toFixed(2)}`
  );
};
// divideNum(5,6)

// Task 5
const remainder = (num1, num2) => {
  console.log(`Remainder of ${num1} divided by ${num2} is ${num1 % num2}`);
};
// remainder(12, 6);

// Activity 2 :
//  Task 6
const additionAssignment = (num1, num2) => {
  console.log(`before : ${num1}`);
  num1 += num2;
  console.log(`after : ${num1}`);
};
// additionAssignment(5,6)

//  Task 7
const subtractionAssignment = (num1, num2) => {
  console.log(`before : ${num1}`);
  num1 -= num2;
  console.log(`after : ${num1}`);
};
// subtractionAssignment(5,6)

// Activity 3
// Task 8
const compareNum = (num1, num2) => {
  console.log(
    `${num1 > num2 ? num1 : num2} is greater in between ${num1} & ${num2}`
  );
};

// compareNum(5,6) //6 is greater in between 5 & 6
// Task 9
const greaterThanEqual = (num1, num2) => {
  console.log(
    `${num1 >= num2 ? num1 : num2} is greater than or equal to ${
      num1 === num2 ? "both" : `${num1} and ${num2}`
    } `
  );
};
// greaterThanEqual(7,6)

const lessThanEqual = (num1, num2) => {
  console.log(
    `${num1 <= num2 ? num1 : num2} is less than or equal to ${
      num1 === num2 ? "both" : `${num1} and ${num2}`
    } `
  );
};
// lessThanEqual(5,6) //5 is less than or equal to 5 and 6


// Task 10
const equality = (num1, num2) => {
  console.log(`${num1} and ${num2} are ${num1 == num2 ? `same` : `not same`} `);
};
// equality(5,6) //5 and 6 are not same
const strictEquality = (num1, num2) => {
  console.log(
    `${num1} and ${num2} are ${num1 === num2 ? `same` : `not same`} `
  );
};
// strictEquality(5,'5') //5 and 5 are not same




// Activity 4
// task 11
const positive = (num1, num2) => {
  if (num1 > 0 && num2 > 0) {
    console.log("Both numbers are positive.");
  } else if (num1 < 0 && num2 < 0) {
    console.log(`${num1} and ${num2} are both negative.`);
  } else if (num1 < 0) {
    console.log(`${num1} is negative.`);
  } else {
    console.log(`${num2} is negative.`);
  }
};
// positive(-5, 6);

// task 12
const negative =(num1,num2)=>{
    console.log(`${(num1<0  || num2 <0 ) ? `one of the number is negative`:`both number are postive`} `);
}
// negative(-5,6)


// task 13
const negateOp=(num1,num2)=>{
    console.log(`${   !(num1<0  || num2 <0 ) ? `both number are postive`:`one of the number is negative`} `);
}
// negateOp(5,-5)



// task 14

const ternaryOP=(num1,num2) =>{
console.log(`${num1 > num2 ? `${num1} is greater`:`${num2} is greater`}`);
}
// ternaryOP(5,6) //6 is greater