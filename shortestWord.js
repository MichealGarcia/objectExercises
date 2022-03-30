/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/


function findShortestWordAmongMixedElements(arr) {

    let stringArray = [];

    // create an array for strings
    arr.forEach(function (value) {
        if (typeof value === "string") {
            stringArray.push(value)
        }
    });

    // organize the array so that the shortest length is in the front, using sort.
    return stringArray.sort((a, b) => a.length - b.length)[0]

}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three', 'twtqt', 'asdadhfha', 'aa']);
console.log(output); // --> 'aa'
