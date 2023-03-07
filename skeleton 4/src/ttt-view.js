class View {

  constructor(game, el) {
    this.game = game
    this.grid = this.setupBoard();
    el.appendChild(this.grid);
    this.bindEvents()
  }

  setupBoard() {
    const grid = document.createElement('ul');
    for (let i = 0; i < 9; i++) {
      let li = document.createElement('li');
      li.classList.add('unclicked');
      li.setAttribute('x', Math.floor(i / 3))
      li.setAttribute('y', i % 3)
      grid.appendChild(li);
    }
    return grid;
  }
  
  bindEvents() {
    this.grid.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    if (!this.game.isOver()) {
      if (e.target.classList.contains('unclicked')) {
        e.target.classList.remove('unclicked');
        e.target.classList.add('clicked');
        this.makeMove(e.target)
      }
    }
  }

  makeMove(square) {
    square.append(this.game.currentPlayer)
    this.game.playMove([square.getAttribute('x'), square.getAttribute('y')])
  }
  
}

module.exports = View;