/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const View = __webpack_require__ (/*! ./ttt-view.js */ \"./src/ttt-view.js\")\r\nconst Game = __webpack_require__ (/*! ../ttt_node/game.js */ \"./ttt_node/game.js\")\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const container = document.getElementsByClassName('ttt')[0]\r\n  console.log(container)\r\n  const game = new Game()\r\n  const view = new View(game, container)\r\n});\n\n//# sourceURL=webpack://w9d2/./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module) => {

eval("class View {\r\n\r\n  constructor(game, el) {\r\n    this.grid = this.setupBoard();\r\n    el.appendChild(this.grid);\r\n    this.bindEvents()\r\n  }\r\n\r\n  setupBoard() {\r\n    const grid = document.createElement('ul');\r\n    for (let i = 0; i < 9; i++) {\r\n      let li = document.createElement('li');\r\n      li.classList.add('unclicked');\r\n      grid.appendChild(li);\r\n    }\r\n    return grid;\r\n  }\r\n  \r\n  bindEvents() {\r\n    this.grid.addEventListener('click', this.handleClick);\r\n  }\r\n\r\n  handleClick(e) {\r\n    if (e.target.classList.contains('unclicked')) {\r\n      e.target.classList.remove('unclicked');\r\n      e.target.classList.add('clicked');\r\n    }\r\n  }\r\n\r\n  makeMove(square) {}\r\n\r\n}\r\n\r\nmodule.exports = View;\n\n//# sourceURL=webpack://w9d2/./src/ttt-view.js?");

/***/ }),

/***/ "./ttt_node/board.js":
/*!***************************!*\
  !*** ./ttt_node/board.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\r\n\r\nclass Board {\r\n  constructor() {\r\n    this.grid = Board.makeGrid();\r\n  }\r\n\r\n  isEmptyPos(pos) {\r\n    if (!Board.isValidPos(pos)) {\r\n      throw new MoveError('Is not valid position!');\r\n    }\r\n\r\n    return (this.grid[pos[0]][pos[1]] === null);\r\n  }\r\n\r\n  isOver() {\r\n    if (this.winner() != null) {\r\n      return true;\r\n    }\r\n\r\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\r\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\r\n        if (this.isEmptyPos([rowIdx, colIdx])) {\r\n          return false;\r\n        }\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  placeMark(pos, mark) {\r\n    if (!this.isEmptyPos(pos)) {\r\n      throw new MoveError('Is not an empty position!');\r\n    }\r\n\r\n    this.grid[pos[0]][pos[1]] = mark;\r\n  }\r\n\r\n  print() {\r\n    const strs = [];\r\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\r\n      const marks = [];\r\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\r\n        marks.push(\r\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\r\n        );\r\n      }\r\n      strs.push(`${marks.join('|')}\\n`);\r\n    }\r\n\r\n    console.log(strs.join('-----\\n'));\r\n  }\r\n\r\n  winner() {\r\n    const posSeqs = [\r\n      // horizontals\r\n      [[0, 0], [0, 1], [0, 2]],\r\n      [[1, 0], [1, 1], [1, 2]],\r\n      [[2, 0], [2, 1], [2, 2]],\r\n      // verticals\r\n      [[0, 0], [1, 0], [2, 0]],\r\n      [[0, 1], [1, 1], [2, 1]],\r\n      [[0, 2], [1, 2], [2, 2]],\r\n      // diagonals\r\n      [[0, 0], [1, 1], [2, 2]],\r\n      [[2, 0], [1, 1], [0, 2]]\r\n    ];\r\n\r\n    for (let i = 0; i < posSeqs.length; i++) {\r\n      const winner = this.winnerHelper(posSeqs[i]);\r\n      if (winner != null) {\r\n        return winner;\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  winnerHelper(posSeq) {\r\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\r\n      const targetMark = Board.marks[markIdx];\r\n      let winner = true;\r\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\r\n        const pos = posSeq[posIdx];\r\n        const mark = this.grid[pos[0]][pos[1]];\r\n\r\n        if (mark != targetMark) {\r\n          winner = false;\r\n        }\r\n      }\r\n\r\n      if (winner) {\r\n        return targetMark;\r\n      }\r\n    }\r\n\r\n    return null;\r\n  }\r\n\r\n  static isValidPos(pos) {\r\n    return (0 <= pos[0]) &&\r\n    (pos[0] < 3) &&\r\n    (0 <= pos[1]) &&\r\n    (pos[1] < 3);\r\n  }\r\n\r\n  static makeGrid() {\r\n    const grid = [];\r\n\r\n    for (let i = 0; i < 3; i++) {\r\n      grid.push([]);\r\n      for (let j = 0; j < 3; j++) {\r\n        grid[i].push(null);\r\n      }\r\n    }\r\n\r\n    return grid;\r\n  }\r\n}\r\n\r\nBoard.marks = ['x', 'o'];\r\n\r\nmodule.exports = Board;\r\n\n\n//# sourceURL=webpack://w9d2/./ttt_node/board.js?");

/***/ }),

/***/ "./ttt_node/game.js":
/*!**************************!*\
  !*** ./ttt_node/game.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./ttt_node/board.js\");\r\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\r\n\r\nclass Game {\r\n  constructor() {\r\n    this.board = new Board();\r\n    this.currentPlayer = Board.marks[0];\r\n  }\r\n\r\n  isOver() {\r\n    return this.board.isOver();\r\n  }\r\n\r\n  playMove(pos) {\r\n    this.board.placeMark(pos, this.currentPlayer);\r\n    this.swapTurn();\r\n  }\r\n\r\n  promptMove(reader, callback) {\r\n    const game = this;\r\n\r\n    this.board.print();\r\n    console.log(`Current Turn: ${this.currentPlayer}`);\r\n\r\n    reader.question('Enter rowIdx: ', rowIdxStr => {\r\n      const rowIdx = parseInt(rowIdxStr);\r\n      reader.question('Enter colIdx: ', colIdxStr => {\r\n        const colIdx = parseInt(colIdxStr);\r\n        callback([rowIdx, colIdx]);\r\n      });\r\n    });\r\n  }\r\n\r\n  run(reader, gameCompletionCallback) {\r\n    this.promptMove(reader, move => {\r\n      try {\r\n        this.playMove(move);\r\n      } catch (e) {\r\n        if (e instanceof MoveError) {\r\n          console.log(e.msg);\r\n        } else {\r\n          throw e;\r\n        }\r\n      }\r\n\r\n      if (this.isOver()) {\r\n        this.board.print();\r\n        if (this.winner()) {\r\n          console.log(`${this.winner()} has won!`);\r\n        } else {\r\n          console.log('NO ONE WINS!');\r\n        }\r\n        gameCompletionCallback();\r\n      } else {\r\n        // continue loop\r\n        this.run(reader, gameCompletionCallback);\r\n      }\r\n    });\r\n  }\r\n\r\n  swapTurn() {\r\n    if (this.currentPlayer === Board.marks[0]) {\r\n      this.currentPlayer = Board.marks[1];\r\n    } else {\r\n      this.currentPlayer = Board.marks[0];\r\n    }\r\n  }\r\n\r\n  winner() {\r\n    return this.board.winner();\r\n  }\r\n}\r\n\r\nmodule.exports = Game;\r\n\n\n//# sourceURL=webpack://w9d2/./ttt_node/game.js?");

/***/ }),

/***/ "./ttt_node/moveError.js":
/*!*******************************!*\
  !*** ./ttt_node/moveError.js ***!
  \*******************************/
/***/ ((module) => {

eval("\r\nconst MoveError = function (msg) { this.msg = msg; };\r\n\r\n// MoveError really should be a child class of the built in Error object provided\r\n// by Javascript, but since we haven't covered inheritance yet, we'll just\r\n// let it be a vanilla Object for now!\r\n\r\nmodule.exports = MoveError;\r\n\n\n//# sourceURL=webpack://w9d2/./ttt_node/moveError.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;