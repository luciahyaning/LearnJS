const input = process.argv[2] // Input example: 5, 3, 8, 4, 2
const strArray = input.split(",")
let array = strArray.map(str => parseInt(str));

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let current = parseInt(arr[i]);
    let j = i - 1;
    while (j >= 0 && parseInt(arr[j]) > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort(array)); // Output example: [2, 3, 4, 5, 8]