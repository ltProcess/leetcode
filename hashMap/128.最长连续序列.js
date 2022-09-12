/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  时间复杂度：O(n)
//  查找 Set 中的元素的时间复杂度是 O(1)，JS 的 Set 能给数组去掉重复元素
//  将数组元素存入 set 中，遍历数组 nums
//  如果 当前项 - 1 存在于 set ，说明当前项不是连续序列的起点，跳过，继续遍历
//  当前项没有“左邻居”，它就是连续序列的起点
//  不断在 set 中查看 cur + 1 是否存在，存在，则 count +1
//  cur 不再有 “右邻居” 了，就算出了一段连续序列的长度
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longestStreak = 0;
  for (const num of nums) {
    if (set.has(num - 1)) {
      continue;
    }
    let currentNum = num;
    let currentStreak = 1;
    while (set.has(currentNum + 1)) {
      currentNum++;
      currentStreak++;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
};
// @lc code=end
