/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//若 rootroot 是 p,q 的 最近公共祖先 ，则只可能为以下情况之一
// p 和 q 在 rootroot 的子树中，且分列 root 的 异侧（即分别在左、右子树中）；
// p = root ，且 q 在 rootroot 的左或右子树中；
// q = root ，且 p 在 rootroot 的左或右子树中

var lowestCommonAncestor = function (root, p, q) {
  // 使用递归的方法
  // 需要从下到上，所以使用后序遍历
  // 1. 确定递归的函数
  const travelTree = function (root, p, q) {
    // 2. 确定递归终止条件
    if (root === null || root === p || root === q) {
      return root;
    }
    // 3. 确定递归单层逻辑
    let left = travelTree(root.left, p, q);
    let right = travelTree(root.right, p, q);
    if (left !== null && right !== null) {
      return root;
    }
    if (left === null) {
      return right;
    }
    return left;
  };
  return travelTree(root, p, q);
};

// @lc code=end
