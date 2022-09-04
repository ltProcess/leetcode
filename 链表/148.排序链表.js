/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */

// 时间复杂度 O(nlogn)， n为链表的长度
// 空间复杂度 O(logn)，n为链表的长度
var sortList = function (head) {
  // 终止条件
  if (head == null || head.next == null) {
    return head;
  }

  // 获取链表中间节点
  let midNode = getMiddleNode(head);
  let rightHead = midNode.next;
  // 断开链表
  midNode.next = null;

  let left = sortList(head);
  let right = sortList(rightHead);
  // 合并有序链表
  return mergeTwoLists(left, right);
};

// 利用快慢指针找到中间节点
var getMiddleNode = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let slow = head;
  let fast = head.next.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// 合并两个有序链表
var mergeTwoLists = function (l1, l2) {
  let dmy = { next: null };
  let curr = dmy;
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 != null ? l1 : l2;
  return dmy.next;
};
// @lc code=end
