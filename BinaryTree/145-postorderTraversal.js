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

// 非递归版本
const postorderTraversal1 = function(root) {
  const result = [];
  const stack = [];
  let lastVisited = root;

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack[stack.length -  1];
    if (root.right === null || root.right === lastVisited) {
      result.push(root.val);
      stack.pop();
      lastVisited = root;
      root = null;
    } else {
      root = root.right;
    }
  }
  return result;
}