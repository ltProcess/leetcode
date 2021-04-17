/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  // dp[i][j]表示i到j是否为回文
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(true));
  for (let i = 1; i< len; i++) {
    for (let j = 0; i + j < len; j++) {
      dp[j][i+j] = (s[j] === s[j+i]) && dp[j+1][i+j-1];
    }
  }
  let maxStr = '';
  for (let i = 0; i < len; i++) {
    let maxIndex = dp[i].lastIndexOf(true);
    if (maxIndex - i + 1 > maxStr.length) {
      maxStr = s.substring(i, maxIndex + 1);
    }
  }
  return maxStr;
};
// @lc code=end

