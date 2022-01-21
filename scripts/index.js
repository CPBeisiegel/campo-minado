const newGame = new Minesweeper();

const board = document.getElementById("board");
const startButton = document.getElementById("createGame");

const cells = document.getElementsByClassName("cell");

console.log(cells);

newGame.printBoard(board);

startButton.addEventListener("click", () => {
  board.innerHTML = "";

  newGame.init();
  newGame.printBoard(board);
});

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", () => {
    cells[i].classList.remove("no-show");
    cells[i].classList.add("show");
  });
}