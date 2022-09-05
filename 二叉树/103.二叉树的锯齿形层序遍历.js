/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 时间复杂度O(N) 空间复杂度O(M)
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const nodeQueue = [root];
  let isOrderLeft = true;
  while (nodeQueue.length > 0) {
    const levelList = [];
    const len = nodeQueue.length;
    for (let i = 0; i < len; i++) {
      const curr = nodeQueue.shift();
      if (isOrderLeft) {
        levelList.push(curr.val);
      } else {
        levelList.unshift(curr.val);
      }
      if (curr.left !== null) {
        nodeQueue.push(curr.left);
      }
      if (curr.right !== null) {
        nodeQueue.push(curr.right);
      }
    }
    result.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return result;
};
// @lc code=end
