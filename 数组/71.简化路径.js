/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const names = path.split("/");
  const stack = [];
  for (const name of names) {
    if (name === "..") {
      if (stack.length) {
        stack.pop();
      }
    } else if (name.length && name !== ".") {
      stack.push(name);
    }
  }
  return `/${stack.join("/")}`;
};
// @lc code=end
