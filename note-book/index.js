const array1 = [5, 6, 1, 2, 7, 8];
const array2 = [5, 6, 1, 2, 7, 8];

const bubbleSort1 = (array) => {
   const startTime = performance.now();
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  const endTime = performance.now();
  console.log("Bubble sort execution time: " + (endTime - startTime) + " milliseconds");
  return array;
};

const bubbleSort2 = (array) => {
  const startTime = performance.now();
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      const cur = array[j];
      const next =array[j + 1]
      if (cur > next) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  const endTime = performance.now();
  console.log("Bubble sort execution time: " + (endTime - startTime) + " milliseconds");
  return array;
};


const array3 = [9, 5, 6, 2, 7, 4];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j;
      // Di chuyển các phần tử của mảng arr[0..i-1],
      // mà lớn hơn current, đến một vị trí phía trước của vị trí hiện tại
      for ( j = i - 1; j >= 0 && arr[j] > current; j--) {
          arr[j + 1] = arr[j];
      }
      arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([...array3]));
