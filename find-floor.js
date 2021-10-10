function findFloor(arr,num) {
  let [leftIdx, rightIdx, idx] = [0,arr.length-1,null];
  let floorIdx = -1;
  while (leftIdx <= rightIdx){
    idx = Math.floor((leftIdx + rightIdx) / 2);
    evalNum = arr[idx]
    if (evalNum < num && !(num < arr[idx+1]) && typeof arr[idx+1] !== "undefined") {
      leftIdx = idx + 1;
    } else if (evalNum > num) {
      rightIdx = idx -1;
    } else {
      floorIdx = idx;
      leftIdx = rightIdx + 1;
    }
  }
  return floorIdx === -1 ? -1 : arr[floorIdx];
}

module.exports = findFloor

// window.onload = function(){
//   document.getElementById("btn-run").onclick = function(){
//     console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
//     console.log(findFloor([1,2,8,10,10,12,19], 20)); // 19
//     console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1
//   }
// }