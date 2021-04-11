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
  if (len === 0) return;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let current = matrix[i].shift();
      matrix[j].push(current);
    }
  }
  for (let k = 0; k < len; k++) {
    matrix[k].reverse();
  }
};
rotate([[1,2,3],[4,5,6],[7,8,9]])
// @lc code=end

