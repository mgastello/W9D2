const View = require ('./ttt-view.js')
const Game = require ('../ttt_node/game.js')

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementsByClassName('ttt')[0]
  console.log(container)
  const game = new Game()
  const view = new View(game, container)
});