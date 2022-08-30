/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const len = nums.length;
  if (len === 0) return null;
  const hashMap = nums.reduce((current, patch) => {
    if (current[patch]) {
      current[patch] += 1;
    } else {
      current[patch] = 1;
    }
    return current;
  }, {});
  const [[key, value]] = Object.entries(hashMap).filter(
    ([key, value]) => value >= len / 2
  );
  return key;
};
console.log(majorityElement([3, 2, 3]));
