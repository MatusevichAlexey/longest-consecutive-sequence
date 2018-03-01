module.exports = function longestConsecutiveLength(array) {
  array.sort(compareFunction);

  if (array.length === 0) {
    maxLenght = 0;
    return maxLenght;
  }
  
  function compareFunction (a,b) {
    return a - b;
  }

  var maxLenght = 1, count = 1;
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1] - 1) {
      count++;
    } else {
      if (count > maxLenght) maxLenght = count;
      count = 1;
    }
  }


    return maxLenght;
  
}
