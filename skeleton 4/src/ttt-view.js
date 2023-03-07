class View {
  constructor(game, el) {
    this.grid = this.setupBoard()
    window.container.appendChild(this.grid)
  }

  setupBoard() {
    const grid = document.createElement('ul')
    for (let i = 0; i < 9; i++) {
      let li = document.createElement('li')
      grid.appendChild(li)
    }
    return grid
  }
  
  bindEvents() {}

  handleClick(e) {
    const space = document.getElementById
  }

  makeMove(square) {}

}

module.exports = View;
