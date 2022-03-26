/* 
Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
*/

function computeSumOfAllElements(arr) {
    let sum = 0;

    arr.forEach(function (num) {
        sum += num;
        return sum;
    });
    return sum

}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output)
