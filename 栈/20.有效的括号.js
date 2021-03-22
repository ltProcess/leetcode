/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const hashMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  const leftList = ['(', '[', '{'];
  const rightList = [')', ']', '}'];
  const stack = [];
  if (s.length <= 1) return false;
  for (let i = 0; i < s.length; i++) {
    if (leftList.includes(s[i])) {
      stack.push(s[i]);
      continue;
    }
    if (rightList.includes(s[i])) {
      const last = stack[stack.length - 1];
      if (hashMap[s[i]] === last) {
        stack.pop();
        continue
      }
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
// @lc code=end

