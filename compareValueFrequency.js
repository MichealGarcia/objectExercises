// Write some JavaScript to create a new 
// array based on the overlapping items and the number 
// of times the overlap occurs. 





let array1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];

let array2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];



// 1st - create an object that has a property "letter" and their count || array of the like letters

function findOverlappingItems() {

  let result = [];

  const createValueCount = function createValueCount(array) {

    countOfValues = array.reduce(function (letters, letter) {

      if (letter in letters) {
        letters[letter]++;
      } else {
        letters[letter] = 1
      }

      return letters

    }, {});
    return countOfValues

  };

  array1Count = createValueCount(array1);
  array2Count = createValueCount(array2);

  console.log(array1Count);
  console.log(array2Count);

  for (propertyi in array1Count) {
    for (propertyj in array2Count) {
      if (propertyi === propertyj) {
        // console.log(array1Count[propertyi]);


        let frequency = Math.min(array1Count[propertyi], array2Count[propertyj]);
        for (let i = 0; i < frequency; i++) {
          result.push(propertyi)

        }
      }
    }
  }

  return result
};

console.log(findOverlappingItems());
