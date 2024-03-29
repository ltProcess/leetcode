/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null; // 空的直接返回，不然 lists.length 是负数
  return mergeList(lists, 0, lists.length - 1);
};

// 归并排序进行不断的分割，return 时的 merge 进行合并排序
function mergeList(lists, start, end) {
  // 如果 start === end 说明分治的分到头了，只剩一个元素了，直接返回即可
  if (start === end) {
    return lists[start];
  }
  const mid = start + ((end - start) >> 1); // 找到中点，然后下面继续进行递归分割成左右两部分
  const leftList = mergeList(lists, start, mid);
  const rightList = mergeList(lists, mid + 1, end);
  return merge(leftList, rightList); // 进行合并
}

// 这里就是基本算法，合并两个有序链表
function merge(head1, head2) {
  let newHead = new ListNode(0),
    p = newHead;
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      p.next = head1;
      head1 = head1.next;
    } else {
      p.next = head2;
      head2 = head2.next;
    }
    p = p.next;
  }
  // 没遍历完的接上即可
  p.next = head1 ? head1 : head2;
  return newHead.next;
}

// @lc code=end
