
/*
Write a function called "getNthElement".
Given an array and an integer, "getNthElement" 
returns the element at the given integer, within the given array.
Notes:
* If the array has a length of 0, it should return 'undefined'.
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
*/
let testArray = [12, 11, 22, 39];


function getNthElement(array, n) {
    console.log(array[n]);
}

var output = getNthElement(testArray, 2);
var output = getNthElement(testArray, 10);
var output = getNthElement(testArray, 0);
