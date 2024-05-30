// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const table = document.getElementById('gameGrid');
    const player1CountSpan = document.getElementById('player1Count');
    const player2CountSpan = document.getElementById('player2Count');
    const currentTurnSpan = document.getElementById('currentTurn');
    const vampireBtn = document.getElementById('vampireBtn');
    const werewolfBtn = document.getElementById('werewolfBtn');
    const ghostBtn = document.getElementById('ghostBtn');

    // Initialize variables to track the game state
    let player1Monsters = 0;
    let player2Monsters = 0;
    let currentPlayer = 'Player 1';
    let selectedMonsterType = '';

    // Generate a 10x10 grid
    for (let i = 0; i < 10; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 10; j++) {
           
            const cell = row.insertCell();
            // Assign player-specific classes to the cells
            cell.classList.add(i < 5 ? 'player1' : 'player2');
            // Add click event listener to each cell
            cell.addEventListener('click', function() {
                handleCellClick(cell, i);
            });
        }
    }

    // Set the selected monster type when a button is clicked
    vampireBtn.addEventListener('click', function() {
        selectedMonsterType = 'vampire';
    });
    werewolfBtn.addEventListener('click', function() {
        selectedMonsterType = 'werewolf';
    });
    ghostBtn.addEventListener('click', function() {
        selectedMonsterType = 'ghost';
    });

    // Handle cell click event to place a monster
    function handleCellClick(cell, row) {
        if (selectedMonsterType && !cell.classList.contains('monster')) {

            // Ensure the monster is placed on the correct player's side of the grid
            if ((currentPlayer === 'Player 1' && row < 5) || (currentPlayer === 'Player 2' && row >= 5)) {
                
                // Add the monster class and specific monster type to the cell
                cell.classList.add('monster', selectedMonsterType);
                // Update the monster count for the current player
                
                if (currentPlayer === 'Player 1') {
                    player1Monsters++;
                    player1CountSpan.textContent = player1Monsters;
                } else {
                    player2Monsters++;
                    player2CountSpan.textContent = player2Monsters;
                }
                
                // Clear the selected monster type and switch turns
                selectedMonsterType = '';
                switchTurn();
            }
        }
    }

    // Switch the turn to the other player
    function switchTurn() {
        currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
        currentTurnSpan.textContent = currentPlayer;
    }
});

// Establish a WebSocket connection to the server
const socket = new WebSocket('ws://localhost:3000');

// Event listener to handle incoming messages from the server
socket.addEventListener('message', function(event) {
    console.log('Message from server:', event.data);
});

// Event listener to send a message to the server when the connection is open
socket.addEventListener('open', function() {
    socket.send('Hello, server!');
});
