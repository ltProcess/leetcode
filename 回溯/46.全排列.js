/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];
  const used = {};
  const len = nums.length;
  const dfs = (list) => {
    if (list.length === len) {
      result.push([...list]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[nums[i]]) continue;
      list.push(nums[i]);
      used[nums[i]] = true;
      dfs(list);
      list.pop();
      used[nums[i]] = false;
    }
  };
  dfs([]);
  return result;
};
// @lc code=end
