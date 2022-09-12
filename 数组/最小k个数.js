// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
// 输出： [1,2,3,4]

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  selectK(arr, 0, arr.length - 1, k - 1);

  return arr.slice(0, k);
};
function selectK(arr, l, r, k) {
  let p = partition(arr, l, r, k);
  if (k == p) {
    return arr[p];
  } else if (k < p) {
    return selectK(arr, l, p - 1, k);
  } else {
    return selectK(arr, p + 1, r, k);
  }
}

function partition(arr, l, r, k) {
  let p = l + Math.floor(Math.random(r - l + 1));
  swap(arr, l, p);
  let i = l + 1,
    j = r;
  while (true) {
    while (i <= j && arr[i] < arr[l]) {
      i++;
    }
    while (i <= j && arr[j] > arr[l]) {
      j--;
    }
    if (i >= j) break;
    swap(arr, i, j);
    i++;
    j--;
  }

  swap(arr, l, j);
  return j;
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

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
