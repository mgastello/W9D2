class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    const grid = document.createElement('ul')
    for (let i = 0; i < 9; i++) {
      let li = document.createElement('li')
      grid.appendChild(li)
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
