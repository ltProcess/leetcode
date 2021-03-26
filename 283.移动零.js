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
  let j = null;
  for (let i = 0; i < len; i++) {
    if (j === null && nums[i] !== 0) continue;
    if (nums[i] === 0 && j === null) {
      j = i;
      continue;
    }
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
console.log(moveZeroes([5,1,3,3, 0, 1, 0,12]));
// @lc code=end

