/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let result = 0;
  let p1 = 0,
    p2 = len - 1;
  const calculateArea = (x, y) => {
    return Math.min(height[x], height[y]) * Math.abs(y - x);
  };
  while (p1 < p2) {
    const left = height[p1];
    const right = height[p2];
    result = Math.max(calculateArea(p1, p2), result);
    if (left > right) {
      p2--;
    } else {
      p1++;
    }
  }
  return result;
};
// @lc code=end
