/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// const maxProfit = (prices) => {
//   const len = prices.length;
//   let result = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       result = Math.max(prices[j] - prices[i], result);
//     }
//   }
//   return result;
// };
// const maxProfit = (prices) => {
//   const len = prices.length;
//   let result = 0;
//   for (let i = 0; i < len; i++) {
//     let tempList = prices.slice(i + 1);
//     let tempMax = Math.max(...tempList);
//     if (tempMax < prices[i]) continue;
//     result = Math.max(tempMax - prices[i], result);
//   }
//   return result;
// };

const maxProfit = (prices) => {
  const len = prices.length;
  let result = 0;
  let min = prices[0];
  for (let i = 0; i < len; i++) {
    min = Math.min(min, prices[i]);
    result = Math.max(prices[i] - min, result);
  }
  return result;
};

// @lc code=end
