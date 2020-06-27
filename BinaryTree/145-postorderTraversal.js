/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 二叉树后序遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归版
const postorderTraversal = function(root) {
  const result = [];
  const postOrder = function(node, arr) {
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