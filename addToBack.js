/*
Write a function called "addToBack".
Given an array and an element, "addToBack" returns the given array with the given element added to the end.
Note: It should be the SAME array, not a new array.
var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
*/

let testArray = [1, 2, 3, 4]

function addToBack(arr, element) {
    arr.push(element);
    return arr

}

var output = addToBack(testArray, 5);

console.log(output);
