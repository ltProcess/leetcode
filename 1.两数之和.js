/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  const m = new Map();
  for (let i = 0; i < len; i++) {
    const restValue = target - nums[i];
    if (m.has(restValue)) {
      return [m.get(restValue), i];
    }
    m.set(nums[i], i);
  }
  return [];
};
// @lc code=end

