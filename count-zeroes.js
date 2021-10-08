function countZeroes(arr) {
  let idx = Math.floor(arr.length / 2);

  while (arr[idx] === arr[idx+1] && idx !== arr.length-1 && idx !== 0){
    idx = ( arr[idx]===0 ? Math.floor(idx/2) : Math.floor(idx/2 + idx));
  }
  
  switch(idx) {
    case 0:
      return arr[idx] === 0 ? arr.length : arr.length - 1;
    case arr.length -1:
      return 0
    default:
      return arr.length - (idx + 1);
  }
}

module.exports = countZeroes