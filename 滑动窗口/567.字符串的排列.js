/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// var checkInclusion = function(s1, s2) {
//   const len1 = s1.length;
//   const len2 = s2.length;
//   const countTimes = (string) => {
//     const tempList = string.split('');
//     const countMap = tempList.reduce((acl, cur) => {
//       if (!acl[cur]) {
//         acl[cur] = 1;
//       } else {
//         acl[cur] += 1;
//       }
//       return acl;
//     }, {});
//     return countMap;
//   }
//   const isEql = (s, countMap) => {
//     const arr = s.split('');
//     const currentMap = countTimes(s);
//     if (s.length !== len1) return false;
//     for (let j = 0; j < arr.length; j++) {
//       const current = arr[j];
//       if (!countMap[current]) return false;
//       if (countMap[current] !== currentMap[current]) return false;
//     }
//     return true;
//   }
//   const s1Map = countTimes(s1);
//   for (let i = 0; i < len2; i++) {
//     const cur = s2.slice(i, len1 + i);
//     console.log(cur);
//     const isCountEql = isEql(cur, s1Map);
//     console.log(isCountEql, cur, s1Map)
//     if (isCountEql) return true;
//   }
//   return false;
// };
// console.log(checkInclusion('hello', 'ooolleoooleh'));
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length || !s2) return false;
  if (!s1) return true;
  const dict1 = new Dictionary(s1);
  const dict2 = new Dictionary();
  let k = s1.length;
  for (let r = 0, l = r - k + 1; r < s2.length; r++, l++) {
      dict2.add(s2[r]);
      l > 0 && dict2.remove(s2[l - 1]);
      if (dict1.equals(dict2)) return true;
  }
  return false;
};

class Dictionary {
  constructor(str) {
      this.arr = new Array(26).fill(0);
      if (str) {
          for (let ch of str) {
              this.add(ch);
          }
      }
  }
  add(ch) {
      this.arr[ch.charCodeAt() - 97]++;
  }
  remove(ch) {
      this.arr[ch.charCodeAt() - 97]--;
  }
  equals(dict) {
      return this.arr.every((x, i) => {return x === dict.arr[i]});
  }
}
// @lc code=end