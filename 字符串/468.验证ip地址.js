/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */

//  IPv4：1. 点号分割，长度一定为4；2. 每组字符串不能以 0 开头；3. 数值必须在：【0, 255】
//  IPv6：1. 冒号分割，长度一定为8；2. 每组必须是 16进制；3. 字符串长度一定为：【1, 4】之间

var validIPAddress = function (IP) {
  function checkIPv4(ip) {
    const ipArr = ip.split(".");
    if (ipArr.length !== 4) {
      return "Neither";
    }

    return ipArr.reduce((res, current) => {
      if (current.length === 1) {
        return res;
      } else {
        return current[0] !== "0" &&
          parseInt(current, 10) >= 10 &&
          parseInt(current, 10) <= 255
          ? res
          : "Neither";
      }
    }, "IPv4");
  }
  function checkIPv6(ip) {
    const ipArr = ip.split(":");
    if (ipArr.length !== 8) {
      return "Neither";
    }

    return ipArr.reduce((res, current) => {
      return /^[A-Fa-f0-9]{1,4}$/.test(current) ? res : "Neither";
    }, "IPv6");
  }

  return checkIPv4(IP) === "IPv4" ? "IPv4" : checkIPv6(IP);
};

// @lc code=end
