/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  let temp = null;
  let i = 0;
  let result = null;
  while (i < len) {
    if (i === 0) result = nums[0];
    temp += nums[i];
    if (temp < nums[i]) {
      temp = nums[i];
    }
    result = Math.max(temp, result);
    i++;
  }
  return result;
};
// console.log(maxSubArray([5,4,-1,7,8]))
// @lc code=end

