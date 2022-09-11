/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0,
    right = x;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
// @lc code=end
