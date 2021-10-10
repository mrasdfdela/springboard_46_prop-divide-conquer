function countZeroes(arr){
  let [lIdx, rIdx, idx] = [0, arr.length - 1, null];

  while (lIdx <= rIdx){
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

// window.onload = function(){
//   document.getElementById("btn-run").onclick = function(){
//     console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
//     console.log(countZeroes([1, 0, 0, 0, 0])); // 4
//     console.log(countZeroes([0, 0, 0])); // 3
//     console.log(countZeroes([1, 1, 1, 1])); // 0
//   }
// }