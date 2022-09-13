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
const decodeString = function (s) {
  const len = s.length;
  const timesStack = [];
  const resStack = [];
  let res = "";
  let times = 0;
  for (let i = 0; i < len; i++) {
    const cur = s[i];
    const n = s.charCodeAt(i);
    if (cur === "[") {
      timesStack.push(times);
      resStack.push(res);
      times = 0;
      res = "";
    } else if (cur === "]") {
      let temp = "";
      let count = timesStack.pop();
      let curRes = resStack.pop();
      for (let j = 0; j < count; j++) {
        temp += res;
      }
      res = curRes + temp;
    } else if (n >= 48 && n <= 57) {
      times = times * 10 + (cur - "0");
    } else {
      res += cur;
    }
  }
  return res;
};
// @lc code=end
