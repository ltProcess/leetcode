/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 二叉树前序遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归func

const preorderTraversal = function(root) {
  const result = [];
  const preOrder = function (node, arr) {
    if (!node) {
      return [];
    } else {
      result.push(node.val);
      preOrder(node.left, arr);
      preOrder(node.right, arr);
    }
  }
  preOrder(root, result);
  return result;
};
