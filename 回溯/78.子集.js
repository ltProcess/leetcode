/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const res = [];
  const temp = [];
  const len = nums.length;
  const dfs = (cur) => {
    if (cur === nums.length) {
      res.push([...temp]);
      return;
    }
    temp.push(nums[cur]);
    dfs(cur + 1);
    temp.pop();
    dfs(cur + 1);
  };
  dfs(0);
  return res;
};
// @lc code=end
