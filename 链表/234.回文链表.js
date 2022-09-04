/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 复制链表的值到数组中
// 使用双指针判断
var isPalindrome = function (head) {
  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  const half = Math.floor(vals.length / 2);
  for (let i = 0; i < half; i++) {
    if (vals[i] !== vals[vals.length - 1 - i]) return false;
  }
  return true;
};
// @lc code=end
