/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  const len = nums.length;
  let result = len;
  let left = 0,
    right = len - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) return mid;
    else if (target < nums[mid]) {
      right = mid - 1;
      result = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};
// @lc code=end
