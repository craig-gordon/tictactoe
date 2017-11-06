const prompt = require('prompt');

let board = ` --- --- ---
| X |   |   |
 --- --- ---
| X |   |   |
 --- --- ---
| X |   |   |
 --- --- ---`;

// open spaces:
// 15, 19, 23
// 42, 46, 50
// 69, 73, 77

const playGame = (board) => {
  console.log(`
Welcome to Tic Tac Toe!

List of acceptable commands:
- 'tl': Top Left
- 'tm': Top Middle
- 'tr': Top Right

- 'ml': Middle Left
- 'mm': Middle
- 'mr': Middle Right

- 'bl': Bottom Left
- 'bm': Bottom Middle
- 'br': Bottom Right`);

  prompt.start();
  prompt.get('firstmove', (err, result) => {
    console.log(result.firstmove);
  });
}

playGame(board);