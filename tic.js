const prompt = require('prompt');

const board = ` --- --- ---
|   |   |   |
 --- --- ---
|   |   |   |
 --- --- ---
|   |   |   |
 --- --- ---`;

// open spaces:
// 15, 19, 23
// 42, 46, 50
// 69, 73, 77

const idxMappings = {
  'tl': 15
  'tm': 19
  'tr': 23
  'ml': 42
  'mm': 46
  'mr': 50
  'bl': 69
  'bm': 73
  'br': 77
};

const playGame = (board, idxMappings) => {
  let end = false;

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

  const schema = {
    properties: {
      move: {
        message: 'Player 1 -- Enter a move',
        required: true
      }
    }
  }

  prompt.start();
  while (!end) {
    prompt.get(schema, (err, result) => {
      
    });
  }
}

playGame(board);