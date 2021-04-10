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
  for(let i=0;i<bookings.length;i++){
      let [start,end,tickets]=bookings[i];
      addMap.set(start,(addMap.get(start)||0)+tickets);
      minusMap.set(end,(minusMap.get(end)||0)+tickets);
  }
  let sum=0;
  let ans=new Array(n);
  for(let i=0;i<n;i++){
      sum+=addMap.get(i+1)||0;
      ans[i]=sum;
      sum-=minusMap.get(i+1)||0;
  }
  return ans;
};

// @lc code=end

