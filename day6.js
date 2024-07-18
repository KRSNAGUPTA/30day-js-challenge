// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access

// . Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numArr = [1, 2, 3, 4, 5];
function printArr(numArr) {
  for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
  }
}
// printArr(numArr)
// . Task 2: Access the first and last elements of the array and log them to the console.
// console.log(`first value of numArr is ${numArr[0]}`);
// console.log(`last value of numArr is ${numArr[numArr.length - 1]}`);

// Activity 2: Array Methods (Basic)

// . Task 3: Use the push method to add a new number to the end of the array and log the updated array.
// numArr.push(6);
// printArr(numArr)

// . Task 4: Use the pop method to remove the last element from the array and log the updated array.
// numArr.pop()
// printArr(numArr)
// . Task 5: Use the shift method to remove the first element from the array and log the updated array.
// numArr.shift();
// printArr(numArr)
// . Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
// numArr.unshift(7,8)
// printArr(numArr)
// Activity 3: Array Methods (Intermediate)

// . Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let newArr = []
numArr.map((num)=>{
    newArr.push(num*num)
})
// printArr(newArr)
// . Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenArray = numArr.filter((elt) => elt % 2 === 0);
// printArr(evenArray)
// . Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Activity 4: Array Iteration

// . Task 10: Use a for loop to iterate over the array and log each element to the console.
// for (let i = 0; i < numArr.length; i++) {
//   console.log(numArr[i]);
// }
// . Task 11: Use the forEach method to iterate over the array and log each element to the console.
// numArr.forEach((num)=>{
//     console.log(num);
// })
// Activity 5: Multi-dimensional Arrays

// . Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let arr2d = [[1,"first"],[2,"second"],[3,"third"]];
for (let i = 0; i < arr2d.length; i++) {
  for (let j = 0; j < arr2d[0].length; j++) {
    console.log(arr2d[i][j]);
  }
}
// . Task 13: Access and log a specific element from the two-dimensional array.
console.log(arr2d[0][1]);
console.log(arr2d[1][0]);
