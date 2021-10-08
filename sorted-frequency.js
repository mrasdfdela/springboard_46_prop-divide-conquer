function sortedFrequency(arr, num) {
  function _findStartIdx(arr, num) {
    let [minIdx, maxIdx, idx] = [0, arr.length - 1, Math.floor(arr.length / 2)];

    while ( 
      idx !== 0 && 
      // !(arr[idx+1]===num) && 
      !(arr[idx + 1] == num && arr[idx]!==num) ){
      if (arr[idx] >= num) {
        maxIdx = idx;
        idx = Math.floor(maxIdx/2);
      } else {
        minIdx = idx;
        idx = idx + Math.ceil((maxIdx-idx)/2);
      }
    }
    switch (idx) {
      case 0:
        return arr[idx] === num ? -1 : 0;
      case arr.length - 1:
        return arr[idx] === num ? idx - 1 : idx;
      default:
        return idx;
    }
  }

  function _findEndIdx(arr, num) {
    let [minIdx, maxIdx, idx] = [0, arr.length - 1, Math.floor(arr.length / 2)];
    while (
      idx !== arr.length - 1 &&
      !(arr[idx] === num && arr[idx+1]!==num)){
      // console.log('another loop')
      if (arr[idx] <= num) {
        minIdx = idx;
        idx = idx + Math.ceil((maxIdx - idx) / 2);
      } else {
        maxIdx = idx;
        idx = Math.ceil(maxIdx / 2);
      }
      // console.log(`next idx: ${idx}`);
      // console.log(idx !== arr.length - 1);
      // console.log(!(arr[idx] === num && arr[idx + 1] !== num));
    }
    switch (idx) {
      case arr[idx] < num:
        return -1
      default:
        return idx
    }
  }
  console.log(_findEndIdx(arr, num) - _findStartIdx(arr, num));
  return _findEndIdx(arr, num) - _findStartIdx(arr, num);
}

arr = [1,1,2,2,2,2,3];

sortedFrequency(arr,1);
sortedFrequency(arr,2);
sortedFrequency(arr,3);
// sortedFrequency(arr,4);


// module.exports = sortedFrequency