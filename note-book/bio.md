### BIG 0

BIG O is the way to figure out which code (solution) run better

When we measure a function (code) we need to care about **Space and Time Complexity**. But on mostly we focus on **Time Complexity**

- BIG O : BEST CASE - OMEGA
- BIG O : AVERAGE CASE - THETA
- BIG O : WORST CASE - OMICRON

<img src="/access/bigo.png" />

#### 1. Big O - O(1) Constant

Example code for case the constant complexity: O(1)

```ts
const logItems = (n: number) => {
  console.log('Item index:', n);
};
```

#### 2. Big O - O(log n) Logaritmic

Imagine that you need to find one number inside array (array is sorted).

- You can not find that number with O(1) if it not at the head of array.
- You can loop through the array from the head to the end of array to find that number -> O(n). This call linear search

> But we need to optimise we dont want to resolve a propblem with complexity O(n). We can do it with Binary Search Algorithm

Example code for case the logaritmic complexity: O(log n)

- Giả sử với mảng có 100 phần tử với O(n) worst case sẽ là 100;
- Tuy nhiên đối với Binary search thì chỉ worse case sẽ là 7; log2(100) = 6.64

```ts
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Example usage:
const numbers = [1, 3, 5, 7, 9];
const target = 7;
const index = binarySearch(numbers, target);

if (index !== -1) {
  console.log('Target found at index:', index);
} else {
  console.log('Target not found in the array.');
}
```

#### 3. Big O - O(n) Linear

Example code for case the linear complexity: O(n)

```ts
const logItems = (n: number) => {
  for (let i = 0; i < n; i++) {
    console.log('Item index:', i);
  }
};

const logItems = (n: number) => {
  for (let i = 0; i < n; i++) {
    console.log('Item index:', i);
  }
  for (let i = 0; i < n; i++) {
    console.log('Item index:', i);
  }
};
```

#### 4. Big O - O(n^2) Square

Example code for case the quadratic complexity: O(n^2)

```ts
const logItems = (n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

const logItems = (n: number) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let i = 0; i < n; i++) {
    console.log('Item index:', i);
  }
};
```

<details>
    <summary>Transalte</summary>
    <br/>
    <p>Big O là một phương pháp để đánh giá code có hiệu quả hay không.</p>
    <p>Khi đánh giá một hàm được xem là có hiệu quả chúng ta sẽ dựa trên phương diện bộ nhớ tiêu hao và Thời gian thực thi hàm. Tuy nhiên trong nhiều trường hợp ta quan tâm đến thời gian thực thi nhiều hơn</p>
    - Big O có 3 để mô tả giới hạn cuả độ phức tạp hàm
      - Omega (Ω) chỉ giới hạn dưới độ phức tạp hàm
      - Theta (Θ) chỉ giới hạn trung bình độ phức tạp hàm
      - Omicron (O) chỉ giới hạn trên độ phức tạp của hàm

</details>
