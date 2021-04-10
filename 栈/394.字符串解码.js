/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const strStack = [];
  const numStack = [];
  let num = 0;
  let result = '';
  for (const i of s) {
    if (!isNaN(i)) {
      num = num * 10 + Number(i);
    } else if (i === '[') {
      numStack.push(num);
      strStack.push(result);
      result = '';
      num = 0;
    } else if (i === ']') {
      const times = numStack.pop();
      const str = strStack.pop();
      result = str + result.repeat(times);
    } else {
      result += i;
    }
  }
  return result;
};
// @lc code=end

