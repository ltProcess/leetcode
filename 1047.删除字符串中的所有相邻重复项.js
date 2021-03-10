/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  // const strList = S.split('');
  // const len = strList.length;
  // let flag = false;
  // const processList = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === arr[i + 1]) {
  //       flag = true;
  //       arr.splice(i, 2);
  //       break;
  //     }
  //     flag = false;
  //   }
  // }
  // processList(strList);
  // while (flag && strList.length > 1) {
  //   processList(strList);
  // }
  // return strList.join('');

  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (i === 0) {
      stack.push(S[0]);
      continue;
    }
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.join('');
};
// @lc code=end

// const ss = removeDuplicates('aaaaaaaa');
// console.log(ss);