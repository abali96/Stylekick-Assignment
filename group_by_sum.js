function groupBySum(input, num) {
  var returnArr = [];
  input = input.sort();

  while (input.length > 0) {
    if (input[0] > num)
      break;

    var sum = input[0];
    returnArr.push([input.shift()]);
    var j = input.length - 1;

    while (j > -1 && sum < num) {
      if (sum + input[j] <= num) {
        sum += input[j];
        returnArr[returnArr.length - 1].push(input[j]);
        input.splice(j, 1);
      }
      j--;
    }
  }

  if (input.length > 0)
    returnArr.push(input);

  input = [];

  return returnArr;
}

var exampleArr = [1,2,1,1,1,2,2,1,1];
console.log(groupBySum(exampleArr, 4));

// note: method assumes you can destroy input array.