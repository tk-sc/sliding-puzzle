function shuffle(array) {
  let currInd = array.length;
  let tempVal;
  let generatedRandomIndex;
  let tempArr = [...array];

  // shuffling
  while (!isSolvable(tempArr) || isGoal(tempArr)) {
    tempArr = [...array];
    currInd = array.length;
    while (0 !== currInd) {
      generatedRandomIndex = Math.floor(Math.random() * currInd);
      currInd -= 1;
      // changing location
      tempVal = tempArr[currInd];
      tempArr[currInd] = tempArr[generatedRandomIndex];
      tempArr[generatedRandomIndex] = tempVal;
    }
  }
  return tempArr;
}

//taken from https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/
function getTotalInversion(array) {
  let totalInv = 0;
  for (let i = 0; i < 9 - 1; i++) {
    for (let j = i + 1; j < 9; j++) {
      // Value 8 is used for empty space
      if (array[j] != 8 && array[i] != 8 && array[i] > array[j]) {
        totalInv++;
      }
    }
  }
  return totalInv;
}

//taken from https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/
// This function returns true if given 8 puzzle is solvable.
function isSolvable(array) {
  let totalInv = getTotalInversion(array);
  return totalInv % 2 == 0;
}
