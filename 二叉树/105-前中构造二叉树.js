/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null;
  let i = inorder.indexOf(preorder[0]);
  let node = new TreeNode(preorder[0]);
  // 解释：https://zhuanlan.zhihu.com/p/34147390
  node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
  return node;
};
