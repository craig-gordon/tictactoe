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

const mappings = {
  'tl': 15,
  'tm': 19,
  'tr': 23,
  'ml': 42,
  'mm': 46,
  'mr': 50,
  'bl': 69,
  'bm': 73,
  'br': 77
};

const playGame = async (board, mappings) => {
  let end = false;
  let currPlayer = 1;

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
        message: `Player ${currPlayer} -- Enter a move`,
        required: true
      }
    }
  }

  prompt.start();

  (function iterateTurns(curr) {
    console.log('Current Board:\n', board);
    prompt.get('move', (err, result) => {
      if (board[mappings[result.move]] === ' ') {
        board[mappings[result.move]] = curr === 1 ? 'X' : 'O';
        iterateTurns(board, curr === 1 ? 2 : 1);
      } else {
        console.log('Invalid move');
        iterateTurns(board, curr === 1 ? 1 : 2);
      }
    });
  })(currPlayer);
}

playGame(board, mappings);