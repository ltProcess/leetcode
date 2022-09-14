/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 定义状态 dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润，dp[i][1] 表示第i天交易完后手里持有一支股票的最大利润

// dp[i][0]=max{dp[i−1][0],dp[i−1][1]+prices[i]}
// dp[i][1]=max{dp[i−1][1],dp[i−1][0]−prices[i]}

// 时间复杂度O(n)

const maxProfit = function (prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map((item) => new Array(2).fill(0));
  dp[0][1] = -prices[0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[len - 1][0];
};
// @lc code=end
