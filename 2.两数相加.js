/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 === null || l2 === null) {
    return l1 || l2;
  }
  let current;
  let finnal;
  let overflow = 0;
  while (l1 !== null || l2 !== null || overflow) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + overflow;
    let curVal;
    if (sum > 9) {
      overflow = (sum / 10) >> 0;
      curVal = sum % 10;
    } else {
      overflow = 0;
      curVal = sum;
    }
    if (current) {
      current.next = new ListNode(curVal);
      current = current.next;
    } else {
      current = new ListNode(curVal);
      finnal = current;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return finnal;
};
// @lc code=end

