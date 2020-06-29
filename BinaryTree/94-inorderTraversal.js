/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 二叉树中序遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const result = [];
  const inorder = function(node, arr) {
    if (!node) {
      return [];
    } else {
      inorder(node.left, arr);
      result.push(node.val);
      inorder(node.right, arr);
    }
  }
  inorder(root, result);
  return result;
};

const inorderTraversal2 = function(root) {
  const result = [];
  const stack = [];
  while (root !== null || stack.length !== 0) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
}