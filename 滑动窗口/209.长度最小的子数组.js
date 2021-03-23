/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let temp = [];
  const len = nums.length;
  let result = null;
  let sum = 0;
  let j = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    while (sum >= target) {
      subLength = (i - j + 1);
      result = result === null ? subLength : (result < subLength ? result : subLength);
      sum -= nums[j++]; 
    }
  }
  return result;
};
console.log(minSubArrayLen(11, [1,2,3,4,5]))
// @lc code=end

