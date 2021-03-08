/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0;
  let i = 0;
  const len = s.length;
  const temp = [];
  while (i < len) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i]);
    } else {
      temp.shift();
      continue;
    }
    res = Math.max(res, temp.length);
    i++;
  }
  return res;
};
// @lc code=end

