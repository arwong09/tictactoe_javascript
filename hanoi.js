// (function (root) {
//   var Hanoi = root.Hanoi = (root.Hanoi || {});
//
//   var readline = require('readline');
//   var reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//
//   function Game() {
//     this.stack = [[3,2,1],[],[]];
//   }
//
  Game.prototype.userInput = function () {
    var that = this;

    reader.question("Enter first stick then second stick (ie. 1 2)",
     function(user_input){
       x = parseInt(user_input.split(" ")[0]);
       y = parseInt(user_input.split(" ")[1]);
       that.run([x,y]);
    })
  }

  Game.prototype.moveRings = function (input) {

    var moveFromStick = this.stack[input[0] - 1];
    var moveToStick = this.stack[input[1] - 1];

    var ring = moveFromStick.pop();
    moveToStick.push(ring);
  }

  Game.prototype.printBoard = function() {
    for(var j = 2; j >= 0; j--) {
      row = "";
      for( var i = 0; i < 3; i ++ ){
        if(this.stack[i][j]){
         row += (this.stack[i][j] + "    ");
        } else { row += "     ";}
      }
      console.log(row);
    }
  }

  Game.prototype.run = function (input) {
    this.userInput();

    if(input){
      this.moveRings(input);
      this.printBoard();

      if(this.stack[2].length == 3) {
        console.log("You Win!");
        reader.close();
        return;
      }
    }
  }
//
//   hanoi = new Game();
//   hanoi.run();
// })(this);

(function (root) {
  var TicTacToe = root.TicTacToe = (root.TicTacToe || {});

  var readline = require('readline');
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function Board () {
    this.grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
  }

  function Game () {
    this.board = new Board();
    this.player = "X";
  }

  Board.prototype.findWinner = function (mark) {
    var rows = [this.grid[0], this.grid[1], this.grid[2]];
    var diag = [[],[]];
    var marks = [mark, mark, mark];

    for(var i = 0; i < 3; i++){
      if(rows[i].compare(marks)){
        return true;
      }
      if([this.grid[0][i], this.grid[1][i], this.grid[2][i]].compare(marks)) {
        return true;
      }
      diag[0].push(this.grid[i][i]);
      diag[1].push(this.grid[2 - i][i]);
    }

    if(diag[0].compare(marks) || diag[1].compare(marks)) {
      return true;
    }

    return false;
  }

  Game.prototype.userInput = function () {
    var that = this;

    reader.question("Enter your move \n", function(userInput) {
      x = parseInt(userInput.split(" ")[0]);
      y = parseInt(userInput.split(" ")[1]);
      that.run([x,y]);
    })
  }

  Game.prototype.run = function (userInput) {
    this.userInput();

    if (userInput) {
      this.board.grid[userInput[0]][userInput[1]] = this.player;
      this.printBoard();

      if(this.board.findWinner(this.player)) {
        reader.close();
        console.log(this.player + " wins!");
        return;
      }
      this.player = this.player === "X" ? "O" : "X";
    }
  }

  Game.prototype.printBoard = function () {
    for (var i = 0; i < 3; i++) {
      var row = "";
      for (var j = 0; j < 3; j++) {
        row += this.board.grid[i][j];
      }
      console.log(row);
    }
  }

  Array.prototype.compare = function (that) {
    if (this.length !== that.length) {
      return false;
    } else {
      for (var i = 0; i < this.length; i++) {
        if (this[i] !== that[i]) {
          return false;
        }
      }
      return true
    }
  }

  var ttt = new Game();
  ttt.run();
})(this);