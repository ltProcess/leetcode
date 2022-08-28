// 输入：[1,0,2,3,0,4,5,0]
// 输出：null
// 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
const duplicateZeros = (arr) => {
  if (!arr.includes(0)) return;
  let len = arr.length;
  for (let i = 0; i < len; ) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i = i + 2;
    } else {
      i = i + 1;
    }
  }
  arr.splice(len, arr.length - len);
};
