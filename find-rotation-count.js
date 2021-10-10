function findRotationCount(arr) {
  let [leftIdx, rightIdx] = [0, arr.length - 1, null];
  while (leftIdx <= rightIdx) {
    let idx = Math.floor((leftIdx + rightIdx) / 2);
    let [firstNum, currNum] = [arr[0], arr[idx]];
    if (currNum > firstNum) {
      leftIdx = idx + 1;
    } else if (currNum < firstNum && arr[idx - 1] < currNum) {
      rightIdx = idx - 1;
    } else {
      return idx
    }
  }
  return 0;
}

module.exports = findRotationCount 

// window.onload = function(){
//   document.getElementById("btn-run").onclick = function(){
//     console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
//     console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
//     console.log(findRotationCount([7, 9, 11, 12, 15])); // 0
//   }
// }