/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  if (!root) return [];
  let result = [];
  let queList = [[root, 0]];
  while (queList.length) {
    let [node, dep] = queList.shift();
    result[dep] = node.val;
    if (node.left) {
      queList.push([node.left, dep + 1]);
    }
    if (node.right) {
      queList.push([node.right, dep + 1]);
    }
  }
  return result;
};
// @lc code=end
