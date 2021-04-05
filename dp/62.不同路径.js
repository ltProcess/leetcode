/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) return 1;
  
  let dp = [];
  for (let k = 0; k < m; k++) {
    dp[k] = [];
  }


  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m - 1][n - 1]
};
// @lc code=end

