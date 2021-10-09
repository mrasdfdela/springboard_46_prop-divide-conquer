function countZeroes(arr){
  let [lIdx, rIdx, idx] = [0, arr.length - 1, null];

  while (lIdx < rIdx){
    idx = Math.floor((lIdx + rIdx)/2);
    if (arr[idx] === 1) {
      if (arr[idx+1]===0) { return arr.length - (idx + 1) }
      lIdx = idx + 1;
    } else if (arr[idx - 1] === 0){
      if (idx-1===0) {return arr.length}
      rIdx = idx - 1;
    } else {
      return arr.length - idx
    }
  }
  return 0;
}

module.exports = countZeroes;
// console.log(countZeros([1, 1, 1, 1, 0, 0]));
// console.log(countZeros([1, 0, 0, 0, 0]));
// console.log(countZeros([0,0,0]));
// console.log(countZeros([1,1,1,1]));