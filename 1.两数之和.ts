/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // let result = [];
  // for (let i = 0; i < nums.length; i++) {
  //   const current = nums[i];
  //   if (nums.includes(target - current)) {
  //     const index2 = nums.indexOf(target - current);
  //     if (i !== index2) {
  //       result = [i, index2];
  //       break;
  //     }
  //   }
  // }
  // return result;
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n1 = target - n;
    if (m.has(n1)) {
      return [m.get(n1), i];
    }
    m.set(n,i);
  }
};
// @lc code=end

