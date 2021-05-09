/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums3 = nums1.concat(nums2);
  const sums = nums3.length / 2;
  nums3.sort((a, b) => a - b);
  if (nums3.length % 2 !== 0) {
    return nums3[Math.floor(sums)];
  } else {
    return parseFloat((nums3[sums] + nums3[sums - 1]) / 2);
  }
};
// @lc code=end

