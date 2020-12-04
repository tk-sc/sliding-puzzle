function shuffle(array) {
  let currInd = array.length;
  let tempVal;
  let generatedRandomIndex;
  let tempArr = [...array];

  // shuffling
  console.log(`BISA GK ${tempArr} ${!isSolvable(tempArr)} ${isGoal(tempArr)}`)
  while (!isSolvable(tempArr) || isGoal(tempArr)) {
    console.log("shuffling")
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
  console.log(`Return from shuffle ${tempArr}`)
  return tempArr;
}

//taken from https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/
function getInvCount(arr) {
  let invCount = 0;
  for (let i = 0; i < 9 - 1; i++) {
    for (let j = i + 1; j < 9; j++) {
      // Value 8 is used for empty space
      if (arr[j] != 8 && arr[i] != 8 && arr[i] > arr[j]) {
        invCount++;
      }
    }
  }
  return invCount;
}

//taken from https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/
// This function returns true if given 8 puzzle is solvable.
function isSolvable(arr) {
  let invCount = getInvCount(arr);
  return invCount % 2 == 0;
}
