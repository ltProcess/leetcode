/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// 由于我们最多可以完成两笔交易，因此在任意一天结束之后，我们会处于以下五个状态中的一种：
// 未进行过任何操作；
// 只进行过一次买操作；buy1
// 进行了一次买操作和一次卖操作，即完成了一笔交易；sell1
// 在完成了一笔交易的前提下，进行了第二次买操作；buy2
// 完成了全部两笔交易 sell2

// 时间复杂度O(n)

const maxProfit = function (prices) {
  const len = prices.length;
  let buy1 = -prices[0],
    buy2 = -prices[0];
  let sell1 = 0,
    sell2 = 0;
  for (let i = 1; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[2]);
  }
  return sell2;
};
// @lc code=end
