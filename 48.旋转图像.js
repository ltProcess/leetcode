/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const len = matrix.length;
  if (len=== 1) return matrix;
  const result = new Array(len);
  for (let k = 0; k < len; k++) {
    result[k] = [];
  }
  for (let i = 0; i < len; i++) {
    const current = matrix[i];
    for (let j = 0; j < current.length; j++) {
      result[j].unshift(current[j]);
    }
  }
  return result;
};
// @lc code=end

