const input = process.argv[2] // Input example: 5, 3, 8, 4, 2
const strArray = input.split(",")
let array = strArray.map(str => parseInt(str));

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(array)); // Output: [2, 3, 4, 5, 8]