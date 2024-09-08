const boardCells = document.querySelectorAll('.board-cell');
const turn = document.querySelector('.turn');
const result = document.querySelector('.result');

// Assign player symbols
const player1 = 'X';
const player2 = 'O';

// Board array
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Start the game
function startGame() {
    boardCells.forEach((cell, index) => {
        cell.innerHTML = '';
        cell.addEventListener('click', handleClick.bind(null, cell, index));
    });
}

// Handle click event
function handleClick(cell, index) {
    const cellValue = cell.innerHTML;
    if (cellValue === '') {
        if (turn.innerHTML === player1) {
            cell.innerHTML = player1;
            board[Math.floor(index / 3)][index % 3] = player1;
            turn.innerHTML = player2;
        } else {
            cell.innerHTML = player2;
            board[Math.floor(index / 3)][index % 3] = player2;
            turn.innerHTML = player1;
        }
    }
    // Remove event listener after click
    cell.removeEventListener('click', handleClick);
    // Check winner after each click
    checkWinner();
}

// Check if a player has won
function checkWinner() {
    let winner = '';

    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
            winner = board[i][0];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
            winner = board[0][i];
        }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
        winner = board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
        winner = board[0][2];
    }

    // Display result
    if (winner !== '') {
        result.innerHTML = `${winner} won!`;
        result.style.display = 'flex';  // Make result visible
        boardCells.forEach(cell => {
            cell.removeEventListener('click', handleClick);
        });
    } else {
        // Check if the game is a draw
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] !== '') {
                    count++;
                }
            }
        }
        if (count === 9) {
            result.innerHTML = 'Game is Draw!';
            result.style.display = 'flex';  // Make result visible
        }
    }
}

// Restart the game
function restartGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    turn.innerHTML = player1;
    result.innerHTML = '';  // Clear previous result
    result.style.display = 'none';  // Hide result
    startGame();  // Restart the game
}

// Start the game on page load
startGame();