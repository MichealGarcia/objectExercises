
/*
Write a function called "joinArrays".
Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2". 
var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
You should be familiar with the "concat" method for this problem.
*/
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

function joinArrays(arr1, arr2) {
    arr2.forEach(function (i) {
        arr1.push(i)
    });
    return arr1
}

let testArray = joinArrays(array1, array2);
console.log(testArray)
