class Minesweeper {
  constructor() {
    this.boardRowsLength = 6;
    this.boardColumnsLength = 6;
    this.minesLength = 5;
    
    this.board = [];
    this.minesPosition = [];
    this.aroundCells = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ]
  }
  
  init() {
    this.generateEmptyBoard();
    this.generateMinesPosition();
    this.insertMines();
    this.updateBoardNumbers();
  }
  
  generateEmptyBoard() {
    for (let i = 0; i < this.boardRowsLength; i++){
      this.board.push([]);
      
      for (let j = 0; j < this.boardColumnsLength; j++){
        this.board[i][j] = 0
      }
    }
  }
  
  generateMinesPosition() {
    
    while (this.minesPosition.length < this.minesLength) {
      const y = this.getRandomInt(0, this.boardRowsLength);
      const x = this.getRandomInt(0, this.boardColumnsLength);
      
      
      if (!this.minesPosition.join(" ").includes(`${y},${x}`)){
        this.minesPosition.push([y, x]);
      }     
      
    }
    
  }
  
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  
  insertMines() {
    for (let i = 0; i < this.minesPosition.length; i++){
      const y = this.minesPosition[i][0];
      const x = this.minesPosition[i][1];
      this.board[y][x] = "M"
    }
  }
  
  updateBoardNumbers() {
    for (let i = 0; i < this.minesPosition.length; i++){
      for (let j = 0; j < this.aroundCells.length; j++){
        const minePosition = this.minesPosition[i]; 
        const spacesAround = this.aroundCells[j]; 
        const y = minePosition[0] + spacesAround[0] 
        const x = minePosition[1] + spacesAround[1]
        
        
        
      const vouSomarAonde = [y, x];
        
        if ((vouSomarAonde[0] >= 0 && vouSomarAonde[1] >= 0) && (vouSomarAonde[0] < this.boardRowsLength && vouSomarAonde[1] < this.boardColumnsLength) && (typeof this.board[y][x] === "number")) {
          this.board[y][x] ++;
        }
      }
    }
  }
  
  printBoard(board) {
    for (let i = 0; i < this.board.length; i++){
      const row = document.createElement("DIV");
      
      for (let j = 0; j < this.board[i].length; j++){
        const cell = document.createElement("SPAN");
        
        cell.innerText = this.board[i][j]
        row.appendChild(cell);
        
      }
      
      board.appendChild(row)
    }
  }
  
  
}


//const table = new Minesweeper()

//console.log(table)

//console.log(table.board)

// table.generateEmptyBoard()

//console.log(table.board)

//console.log(table.minesPosition)

// table.generateMinesPosition() 

//console.log(table.minesPosition)

// table.insertMines()

//console.log(table.board)

// table.updateBoardNumbers()

// console.log(table.board)