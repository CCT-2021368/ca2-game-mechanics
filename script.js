document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('gameGrid');
    
    // Outter for loop that interact with the rows
    for (let i = 0; i < 10; i++) {

        const row = table.insertRow();
        
        // inner for loop that create
        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell();

            
            // if else that adds the colors for the grids for player 1 and  2
            if (i < 5) {
                cell.classList.add('player1');
            } else {
                cell.classList.add('player2');
            }
        }
    }
});
