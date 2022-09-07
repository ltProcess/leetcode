/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  const len = nums.length;
  let cur = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    cur = 0;
    for (let j = i; j >= 0; j--) {
      cur += nums[j];
      if (cur === k) res += 1;
    }
  }
  return res;
};

// @lc code=end
