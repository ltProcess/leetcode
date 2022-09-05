/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
// 时间复杂度O(N)
var countNodes = function (root) {
  if (!root) return 0;
  let result = 1;
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.shift();
    if (curr.right) {
      result += 1;
      stack.push(curr.right);
    }
    if (curr.left) {
      result += 1;
      stack.push(curr.left);
    }
  }
  return result;
};
// @lc code=end
