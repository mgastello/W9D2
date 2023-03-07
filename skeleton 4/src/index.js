const View = require ('./ttt-view.js')
const Game = require ('../ttt_node/game.js')

window.View = View
window.Game = Game

document.addEventListener("DOMContentLoaded", () => {
  window.container = document.getElementsByClassName('ttt')[0]
});