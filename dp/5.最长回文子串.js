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

//  对于一个子串而言，如果它是回文串，并且长度大于 2，
//  那么将它首尾的两个字母去除之后，它仍然是个回文串。
//  例如对于字符串“ababa”，如果我们已经知道“bab” 是回文串，
//  那么“ababa” 一定是回文串，这是因为它的首尾两个字母都是 “a”

var longestPalindrome = function (s) {
  const len = s.length;
  // dp[i][j]表示i到j是否为回文
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(true));
  for (let i = 1; i < len; i++) {
    for (let j = 0; i + j < len; j++) {
      dp[j][i + j] = s[j] === s[j + i] && dp[j + 1][i + j - 1];
    }
  }
  let maxStr = "";
  for (let i = 0; i < len; i++) {
    let maxIndex = dp[i].lastIndexOf(true);
    if (maxIndex - i + 1 > maxStr.length) {
      maxStr = s.substring(i, maxIndex + 1);
    }
  }
  return maxStr;
};
// @lc code=end
