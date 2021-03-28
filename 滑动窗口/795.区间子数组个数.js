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
  
  // function atMost(K) {
  //   let arr = new Array(A.length).fill(0);
  //   for (let i = 0; i < A.length; i++) {
  //     if (i === 0 && A[0] <= K) {
  //       arr[0] = 1;
  //       continue;
  //     }
  //     if (A[i] <= K) {
  //       arr[i] = arr[i - 1] + 1;
  //     }
  //   }
  //   return arr.reduce((pre, cur) => pre + cur);
  // }
  // return atMost(R) - atMost(L - 1);

  // 定义dp数组,dp[i]标识以A[i]结尾的符合条件的子数组个数,那么可以分三种情况讨论
  // A[i]在L和R之间,那么dp[i]的值为i-rpos,其中rpos是i之前第一个大于R的元素位置
  // A[i]小于L,dp[i] = dp[i-1],如果i为0则dp[i]等于0.
  // A[i]大于R,则dp[i] = 0.
  // 将所有dp[i]加和就是要返回的结果.

  let result = 0;
  let rpos = -1;
  let arr = new Array(A.length).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > R) {
      arr[i] = 0;
      rpos = i;
    } else if (A[i] < L) {
      if (!i) {
        arr[i] = 0;
      } else {
        arr[i] = arr[i-1];
      }
    } else {
      arr[i] = i - rpos;
    }
    result += arr[i];
  }
  return result;
}

// @lc code=end

