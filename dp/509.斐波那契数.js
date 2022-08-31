/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// F(n) = F(n - 1) + F(n - 2)
const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let dp = [0, 1];
  let fibList = dp.concat(new Array(n - 1).fill(0));
  for (let i = 2; i < fibList.length; i++) {
    fibList[i] = fibList[i - 1] + fibList[i - 2];
  }
  return fibList[n];
};
// @lc code=end
