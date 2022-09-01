/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let temp = `${x}`;
  const len = temp.length;
  const n = Math.floor(temp.length / 2);
  for (let i = 0; i < n; i++) {
    if (temp[i] !== temp[len - 1 - i]) return false;
  }
  return true;
};
// @lc code=end
