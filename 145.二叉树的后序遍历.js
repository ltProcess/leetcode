/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];
  const result = [];
  const postOrder = (node, arr) => {
    if (!node) {
      return [];
    } else {
      postOrder(node.left, arr);
      postOrder(node.right, arr);
      arr.push(node.val);
    }
  }
  postOrder(root, result);
  return result;
};
// @lc code=end

