function sortedFrequency(arr, num) {
  function _getLowIdx(){
    let [lowLIdx, lowRIdx, lowIdx] = [0, arr.length - 1, null];
    while (lowLIdx <= lowRIdx) {
      lowIdx = Math.floor((lowLIdx + lowRIdx) / 2);
      if (arr[lowIdx] < num) {
        lowLIdx = lowIdx + 1;
      } else if (arr[lowIdx] >= num && arr[lowIdx] === arr[lowIdx - 1]) {
        lowRIdx = lowIdx - 1;
      } else {
        return lowIdx;
      }
    }
    return -1
  }

  function _getHiIdx(){
    let [hiLIdx, hiRIdx, hiIdx] = [0, arr.length - 1, null];
    while (hiLIdx <= hiRIdx) {
      hiIdx = Math.floor((hiLIdx + hiRIdx) / 2);
      currNum = arr[hiIdx];
      prevNum = arr[hiIdx-1];
      if (currNum <= num && !(prevNum < currNum && currNum === num)) {
        hiLIdx = hiIdx + 1;
      } else if (currNum > num && !(prevNum < currNum)) {
        hiRIdx = hiIdx - 1;
      } else {
        return currNum == num ? hiIdx + 1 : hiIdx;
      }
    }
    return -1
  }

  const numCount = ( _getHiIdx() === -1 ? -1 : _getHiIdx() - _getLowIdx() );
  return numCount;
}

module.exports = sortedFrequency