/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  const len = nums.length;
  if (len < 2) return len;
  let left = 0,
    current = 0,
    right = 1,
    res = 1;
  while (right < len) {
    if (nums[right] <= nums[current]) {
      left = right;
    }
    res = Math.max(res, right - left + 1);
    right++;
    current++;
  }
  return res;
};
// @lc code=end
