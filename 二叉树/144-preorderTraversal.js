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

// 非递归func
const preorderTraversal2 = function(root) {
  const result = [];
  const stack = [];
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      result.push(root.val);
      stack.push(root);
      root = root.left;
    }
    if (stack.length !== 0) {
      root = stack.pop();
      root = root.right;
    }
  }
  return result;
};