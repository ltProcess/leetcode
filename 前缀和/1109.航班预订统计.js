/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  let addMap = new Map();
  let minusMap = new Map();
  for(let i = 0;i < bookings.length; i++){
    let [start, end, tickets] = bookings[i];
    addMap.set(start,(addMap.get(start)||0)+tickets);
    minusMap.set(end,(minusMap.get(end)||0)+tickets);
  }
  // console.log(addMap, minusMap);
  let sum = 0;
  let ans= new Array(n);
  for(let i = 0;i < n; i++){
    sum += addMap.get(i+1)||0;
    ans[i] = sum;
    sum -= minusMap.get(i+1)||0;
  }
  return ans;
};
// const a = corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5);
// console.log(a);
// @lc code=end

