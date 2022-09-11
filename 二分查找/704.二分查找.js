/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const len = nums.length;

  const binarySearch = (nums, target, left, right) => {
    if (left > right) return -1;
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      return binarySearch(nums, target, mid + 1, right);
    } else {
      return binarySearch(nums, target, left, mid - 1);
    }
  };
  return binarySearch(nums, target, 0, nums.length - 1);
};
// @lc code=end
