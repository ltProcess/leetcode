/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const len = nums.length;
  const result = [];
  const used = new Array(len);
  nums.sort((a, b) => a - b);

  const dfs = (path) => {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) {
        continue;
      }
      if (i - 1 >= 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
        // 避免产生重复的排列
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      dfs(path);
      path.pop();
      used[i] = false;
    }
  };
  dfs([]);
  return result;
};
// @lc code=end
