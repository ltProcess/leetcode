/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longestStreak = 0;
  for (const num of nums) {
    if (set.has(num - 1)) {
      continue;
    }
    let currentNum = num;
    let currentStreak = 1;
    while (set.has(currentNum + 1)) {
      currentNum++;
      currentStreak++;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
};
// @lc code=end
