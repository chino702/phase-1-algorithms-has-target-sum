function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  O(n^2) - Quadratic time complexity because of the nested loops
*/

/* 
  - loop through the array, setting the current element as the first operand
  - loop through the rest of the array, setting each element as the second operand
  - if the sum of the two operands equals the target, return true
  - if we finish the loops and no pairs add up to the target, return false
*/

/*
    The function uses a nested loop to iterate through each pair of numbers in the array, checking if their sum equals the target value. If such a pair is found, the function returns true. If no such pair is found, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
