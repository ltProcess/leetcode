/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const len = nums.length;
  let j = nums.indexOf(0);
  if ( j === -1) return nums;
  for (let i = j + 1; i < len; i++) {
    if (nums[i] !== 0) {
      let temp;
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  return nums;
};
// @lc code=end

