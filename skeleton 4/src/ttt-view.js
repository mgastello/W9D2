class View {
  constructor(game, el) {
    this.grid = this.setupBoard();
    window.container.appendChild(this.grid);

    this.grid.addEventListener('click', event => {
      if (event.target.classList.contains('unclicked')) {
        event.target.classList.remove('unclicked');
        event.target.classList.add('clicked');
      }
    });
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
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;