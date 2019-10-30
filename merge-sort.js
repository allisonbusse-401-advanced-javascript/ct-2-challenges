// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length

//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0

//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1

//         k <-- k + 1

//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left

function mergeSort(arr) {
  let n = arr.length;
  if(n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    }
    else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if(i === left.length) {
    while(j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  else {
    while(i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
}

module.exports = mergeSort;

const array = [4, 8, 16, 2, 32, 6];
mergeSort(array);
console.log(array);

// const left = [4, 8, 9, 16];
// const right = [2, 6, 11, 18, 32];
// const arr = [4, 9, 8, 16, 2, 18, 32, 11, 6];
// // const arr = [];
// merge(left, right, arr);
// console.log(left, right);
// console.log(arr);
