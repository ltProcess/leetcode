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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
  if (!root) return false;
  const nodeStack = [root];
  const valueStack = [root.val];
  while (nodeStack.length > 0) {
    let curNode = nodeStack.shift();
    let curVal = valueStack.shift();
    if (!curNode.left && !curNode.right) {
      if (curVal === targetSum) return true;
    }
    if (curNode.left) {
      nodeStack.push(curNode.left);
      valueStack.push(curVal + curNode.left.val);
    }
    if (curNode.right) {
      nodeStack.push(curNode.right);
      valueStack.push(curVal + curNode.right.val);
    }
  }
  return false;
};
