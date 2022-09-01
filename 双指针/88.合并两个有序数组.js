/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1,
//     j = n - 1,
//     k = m + n - 1;
//   while (i >= 0 || j >= 0) {
//     if (i < 0) nums1[k--] = nums2[j--];
//     else if (j < 0) nums1[k--] = nums1[i--];
//     else if (nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
//     else nums1[k--] = nums1[i--];
//   }
//   return nums1;
// };

const merge = (nums1, m, nums2, n) => {
  let p1 = 0,
    p2 = 0;
  let cur;
  const sorted = new Array(m + n).fill(0);
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums1[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i];
  }
};
// @lc code=end
