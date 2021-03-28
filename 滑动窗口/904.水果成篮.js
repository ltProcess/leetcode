/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} tree
 * @return {number}
 */
// 一个数组， 让你选定一个子数组， 这个子数组最多只有两种数字，这个选定的子数组最大可以是多少
// 每棵树只有1个水果。
// 找出连续子数组，一共2种水果，子数组长度最长
var totalFruit = function(tree) {
  const len = tree.length;
  let res = 0;
  let start = 0;
  let hashMap = {};
  if (len <= 1) return len;
  for (let i = 0; i < len; i++) {
    if (hashMap[tree[i]]) {
      hashMap[tree[i]] += 1;
    } else {
      hashMap[tree[i]] = 1;
    }
    while (Object.keys(hashMap).length > 2) {
      hashMap[tree[start]]--;
      if (hashMap[tree[start]] === 0) {
        delete hashMap[tree[start]];
      }
      start++;
    }
    res = Math.max(res, i - start + 1);
  }
  return res;
};
// @lc code=end
