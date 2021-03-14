/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) return 0;
  const count = `${Math.abs(x)}`;
  const list = count.split('').reverse();
  const res = x > 0 ? Number(list.join('')) : -Number(list.join(''));
  if (res < Math.pow(-2,31) || res >= Math.pow(2,31) - 1){
    return 0;
  }
  return res;
};
// @lc code=end

