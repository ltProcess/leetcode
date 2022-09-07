/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  function isValid(row, col, chessBoard, n) {
    // 同一列
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === "Q") {
        return false;
      }
    }
    // 左上斜线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === "Q") {
        return false;
      }
    }
    // 右上斜线
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === "Q") {
        return false;
      }
    }
    return true;
  }

  function transformChessBoard(chessBoard) {
    let chessBoardBack = [];
    chessBoard.forEach((row) => {
      let rowStr = "";
      row.forEach((value) => {
        rowStr += value;
      });
      chessBoardBack.push(rowStr);
    });

    return chessBoardBack;
  }

  let result = [];
  function backtracing(row, chessBoard) {
    if (row === n) {
      result.push(transformChessBoard(chessBoard));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = "Q";
        backtracing(row + 1, chessBoard);
        chessBoard[row][col] = ".";
      }
    }
  }
  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill("."));
  backtracing(0, chessBoard);
  return result;
};
// @lc code=end
