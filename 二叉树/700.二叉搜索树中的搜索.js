/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */

// 递归 时间复杂度O(N) 空间复杂度O(N)
// var searchBST = function (root, val) {
//   if (!root) return null;
//   if (val === root.val) return root;
//   return searchBST(val < root.val ? root.left : root.right, val);
// };

// 迭代
var searchBST = function (root, val) {
  while (root) {
    if (val === root.val) return root;
    root = val < root.val ? root.left : root.right;
  }
  return null;
};
// @lc code=end
