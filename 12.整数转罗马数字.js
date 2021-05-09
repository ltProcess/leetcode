/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = '';
  const romanMap =  {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };
  const keyList = Object.keys(romanMap).reverse();
  for (let key of keyList) {
    if (num >= key) {
      let count = parseInt(num / key);
      for (let i = 0; i < count; i++) {
        result = result.concat(romanMap[key]);
      }
      num -= key*count;
    }
  }
  return result;
};
// @lc code=end

