// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
// 输出： [1,2,3,4]

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const smallestK = function (arr, k) {
  if (k === 0) {
    return [];
  }
  let sorted = false;
  function quicksort(lo, hi) {
    if (sorted || lo >= hi) {
      return;
    }
    let i = lo;
    let j = hi;
    const num = arr[lo];
    while (i < j) {
      while (i < j && arr[j] >= num) {
        j--;
      }
      arr[i] = arr[j];
      while (i < j && arr[i] <= num) {
        i++;
      }
      arr[j] = arr[i];
    }
    arr[i] = num;
    if (i === k) {
      sorted = true;
      return;
    }
    quicksort(lo, i - 1);
    quicksort(i + 1, hi);
  }
  quicksort(0, arr.length - 1);
  return arr.slice(0, k);
};

var quickSort2 = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
