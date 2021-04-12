/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const traverse = (arr, result) => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      if (i === 0) {
        result = result.concat(arr[i]);
      } else if (i === n - 1) {
        result = result.concat(arr[i].reverse());
      } else {
        if (arr[i].length) {
          result.push(arr[i].pop());
        }
      }
    }
    arr.pop();
    arr.shift();
    for (let j = n - 3; j >= 0; j--) {
      if (arr[j].length) {
        result.push(arr[j].shift());
      }
    }
    if (arr.length) {
      return traverse(arr, result);
    } else {
      return result;
    }
  }
  
  return traverse(matrix, []);
};
// @lc code=end

