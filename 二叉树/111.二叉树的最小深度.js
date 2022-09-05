/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

// dfs递归 时间复杂度：O(N) 空间复杂度：O(H) 其中 H 是树的高度  N 是树的节点数
// const minDepth = function (root) {
//   if (root === null) return 0;
//   if (root.right === null) return minDepth(root.left) + 1;
//   if (root.left === null) return minDepth(root.right) + 1;
//   return 1 + Math.min(minDepth(root.left), minDepth(root.right));
// };

// bfs
var minDepth = function (root) {
  if (!root) return 0;
  const p = [[root, 1]];
  while (p.length > 0) {
    const [n, l] = p.shift();
    if (!n.left && !n.right) return l;
    if (n.left) p.push([n.left, l + 1]);
    if (n.right) p.push([n.right, l + 1]);
  }
};
// @lc code=end
