function getValueEqualsIndexArray(array) {
  var linkedArray = [];
  array.forEach((value, index) => {
    if (value === index) {
      linkedArray.push(value);
    }
  });
  return linkedArray;
}

var arrayFinal = getValueEqualsIndexArray([1, 1, 4, 7, 9, 5]);
console.log(arrayFinal);
