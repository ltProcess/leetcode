/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  dp[i] 为考虑前 i 个元素，以第i个数字结尾的最长上升子序列的长度
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
const lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len === 0) return 0;
  let dp = Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
// @lc code=end
