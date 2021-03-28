/*
 * @lc app=leetcode.cn id=795 lang=javascript
 *
 * [795] 区间子数组个数
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
 var numSubarrayBoundedMax = function (A, L, R) {
  
  function atMost(K) {
    let arr = new Array(A.length).fill(0);
    for (let i = 0; i < A.length; i++) {
      if (i === 0 && A[0] <= K) {
        arr[0] = 1;
        continue;
      }
      if (A[i] <= K) {
        arr[i] = arr[i - 1] + 1;
      }
    }
    return arr.reduce((pre, cur) => pre + cur);
  }
  return atMost(R) - atMost(L - 1);
}

// @lc code=end

