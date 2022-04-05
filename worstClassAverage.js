/*
determine the hardest test for the students

grades: {
  Ron: [90, 89, 99, 87, 100, 74],
  Leslie: [78, 74, 92, 87, 77, 81],
  Tom: [77, 61, 89, 47, 57, 83],
  Andy: [34, 54, 44, 58, 39, 41]
};

each number represents, test 1, test 2, test 3, ...


We need to find the class average for each test. Then decide which was the lowest.

*/

const grades = {
  Ron: [90, 89, 99, 87, 100, 74],
  Leslie: [78, 74, 92, 87, 77, 81],
  Tom: [77, 61, 89, 47, 57, 83],
  Andy: [34, 54, 44, 58, 39, 41]
};



function findWorstClassAverage(gradesObject) {

  // initialize object for each test
  let eachTest = {};
  let averageTestScores = {};
  // initialize final output
  // let worstTestOutput = {};


  function createTestsArray() {
    // loop through grades properties.

    for (student in gradesObject) {

      // loop through each student test array, then create a new array 
      // in our each test object, for each test index/number
      gradesObject[student].forEach(function (grade) {

        // create a new porperty in each test object
        eachTest[gradesObject[student].indexOf(grade)] = [];
      })
    }
    // end function
  };


  // fill in empty arrays
  function addToTestsArray() {
    // loop through grades properties.

    for (student in gradesObject) {

      gradesObject[student].forEach(function (grade) {
        eachTest[gradesObject[student].indexOf(grade)].push(grade)
      })
    }
    // end function
  };

  // function to find average of array
  function makeArrayAverage(arrayOfNumbers) {
    for (index in arrayOfNumbers) {

      arrayOfNumbers[index].forEach(function (value_) {

        averageTestScores[arrayOfNumbers[index].indexOf(value_)] = [];

      })
    }
    // end function
  };

  function averageScores(arrayOfScores) {
    let averages = []
    for (i in arrayOfScores) {
      var sums = arrayOfScores[i].reduce(function (sums, score) {
        return sums + score;
      }, 0)
      averages.push([sums / arrayOfScores[i].length, "test" + i])
    }
    return averages;


  };

  function findLowestScoreAverage(objectofAverages) {
    let Currentscore;
    let lowestScore;
    for (i in objectofAverages) {
      Currentscore = objectofAverages[i][0]
      if (2 == 2) {

      };
    }
  };

  // run functions
  createTestsArray();
  addToTestsArray();
  makeArrayAverage(eachTest);
  findLowestScoreAverage(averageScores(eachTest))
  return averageScores(eachTest)
  // return findLowestAverage();
};






console.log(findWorstClassAverage(grades));


