function groupBySum(input, num) {
  if (num == 0)
    return input;

  var returnArr = [];
  input.sort();

  while (input.length > 0) {
    if (input[0] > num) // used to ignore values greater than 'num'
      break;

    var sum = input[0];
    returnArr.push([input.shift()]); // put first element into returnArr
    var j = input.length - 1;

    while (j > -1 && sum < num) { // iterate backwards through array until you make a subarray of sum == num (if possible)
      if (sum + input[j] <= num) {
        sum += input[j];
        returnArr[returnArr.length - 1].push(input[j]);
        input.splice(j, 1);
      }
      j--;
    }
  }

  // uncomment below if you want to put all numbers larger than 'num' in their own subarray at the end of the returnArr
  // if (input.length > 0)
  //   returnArr.push(input);
  // input = []; // set input array to nothing after adding larger numbers (just for clarity)

  return returnArr;
}

var exampleArr = [1,1,2,3,1,6,1,1,1,2,2,2,2];
console.log(groupBySum(exampleArr, 3));

// TEST CASES
// Works with a 'num' parameter value greater than the total sum of the array - simply returns the sorted input array
// Works with 'num' parameter value of 0 - simply returns the input array
// Rejects numbers larger than the value of the 'num' parameter
  // OPTIONAL: Input of [1,1,2,3,1,6,1,1,1,2,2,2,2] grouping by 3 can return [[1,2],[1,2],[1,2],[1,2],[1,2],[1],[3],[6]]
  // if you uncomment the noted lines in the function
// Note that this is the example you provided in the addition note; the result obtained is the 'better' solution you proposed!

// Places to improve:

// 1) Given var exampleArr = [1,2,1,1,1,2,2,1,1];
// the output is "[[1,2,1],[1,2,1],[1,2],[2]]"
// This is not ideal as the last two arrays can be permutated differently to get
// [2,2], [1]. However, as said in the instructions, this doesn't matter too much and hence
// was not accounted for.

// 2) Method assumes you can destroy input array, which may be an issue based on the environment

