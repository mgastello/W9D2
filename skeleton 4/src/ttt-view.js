class View {

  constructor(game, el) {
    this.grid = this.setupBoard();
    el.appendChild(this.grid);
    this.bindEvents()
  }

  setupBoard() {
    const grid = document.createElement('ul');
    for (let i = 0; i < 9; i++) {
      let li = document.createElement('li');
      li.classList.add('unclicked');
      grid.appendChild(li);
    }
    return grid;
  }
  
  bindEvents() {
    this.grid.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    if (e.target.classList.contains('unclicked')) {
      e.target.classList.remove('unclicked');
      e.target.classList.add('clicked');
    }
  }

  makeMove(square) {}

}

module.exports = View;