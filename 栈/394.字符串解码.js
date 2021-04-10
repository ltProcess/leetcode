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
  const numStack = [];
  const strStack = [];
  let result = ''
  let num = 0;
  for (const str of s) {
    if (!isNaN(str)) {
      num = num * 10 + Number(str);
    } else if (str === '[') {
      numStack.push(num);
      strStack.push(result);
      result = '';
      num = 0;
    } else if (str === ']') {
      result = strStack.pop() + result.repeat(numStack.pop());
    } else {
      result += str;
    }
  }
  return result;
};
// @lc code=end

