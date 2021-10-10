function findRotatedIndex(arrFull,num) {
  let [leftIdx, rightIdx, rotateIdxStart] = [0, arrFull.length - 1, null];
  while (leftIdx <= rightIdx){
    let idx = Math.floor((leftIdx + rightIdx) / 2);
    let [firstNum, currNum] = [ arrFull[0],arrFull[idx] ];
    if (currNum > firstNum) {
      leftIdx = idx + 1;
    } else if (currNum < firstNum && arrFull[idx-1] < currNum) {
      rightIdx = idx - 1;
    } else {
      rotateIdxStart = idx;
      leftIdx = rightIdx + 1;
    }
  }

  const arrEval =
    arrFull[0] < num
      ? arrFull.slice(0, rotateIdxStart)
      : arrFull.slice(rotateIdxStart);
  const idxStart = arrEval[0] === arrFull[0] ? 0 : rotateIdxStart;

  function _bSearchSubArr(arr,num) {
    let [lIdx, rIdx] = [0, arr.length - 1];
    while (lIdx <= rIdx) {
      let idx = Math.floor((lIdx + rIdx) / 2);
      if (arr[idx] < num) {
        lIdx = idx + 1;
      } else if (arr[idx] > num) {
        rIdx = idx - 1;
      } else {
        return idx;
      }
    }
    return -1;
  }

  numIdx = _bSearchSubArr(arrEval,num) === -1 ? -1 : idxStart + _bSearchSubArr(arrEval,num);
  
  return numIdx;
}

module.exports = findRotatedIndex

// window.onload = function(){
//   document.getElementById("btn-run").onclick = function(){
//     console.log(findRotatedIndex([3, 4, 1, 2], 4));
//     console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
//     console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
//     console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14));
//     console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));
//   }
// }