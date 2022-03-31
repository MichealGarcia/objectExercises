
// write a function that takes an array jof integers, and 
// finds the pair of adjacent elements that has the largest product
// return that product

// if you have
var testArray = [1, 3, 5, 8];

// You should return 40


// What I need to solve
// Loop through each array value
// ---------
// compare value to the one next to it. 
// if at last value
// return highestProduct = answer*


function findHighestPairProduct(array) {
  let highestProduct = 0;
  let currentProduct = 0;
  let previousProduct = 0;
  let nextValue = 0;

  // first I loop through the array
  array.forEach(function (value) {
    // then i assign the previous iterations product.
    previousProduct = currentProduct;
    // i define this iterations next value
    nextValue = array[array.indexOf(value) + 1];
    // If my current value has another index/iteration following then
    // find the product of current and nextValue
    if (array.includes(nextValue)) {

      currentProduct = value * nextValue;
      // test code
      // console.log(currentProduct, previousProduct)
    };
    // compare current iteration with last iteration product
    if (currentProduct > previousProduct) {
      highestProduct = currentProduct
    }

  })

  return highestProduct
};

console.log(findHighestPairProduct(testArray))
