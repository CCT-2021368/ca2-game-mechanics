# CA2-game-mechanics


<img src="https://github.com/CCT-2021368/ca2-game-mechanics/assets/102427836/cd51d9c0-9977-40f7-aaac-70f451e3d3ac" alt="Screenshot_1" width="450" height="300"/>


Monster Game is a web-based board game played on a 10x10 grid where two players place and move monsters to eliminate each other's monsters.

## How to Play

- Players take turns placing a vampire, werewolf, or ghost on their side of the grid.
- Monsters can move horizontally, vertically, or diagonally.
- Monsters can't move over other player's monsters.
- If two monsters land on the same square, one is removed based on the type:
  - Vampire vs Werewolf: Werewolf is removed.
  - Werewolf vs Ghost: Ghost is removed.
  - Ghost vs Vampire: Vampire is removed.
  - Same type: Both are removed.
- A player loses when 10 of their monsters are removed.
- The game is won when the other player is eliminated.

## Features

- Real-time gameplay with WebSockets.
- Multiple games can be played at once.
- Displays the number of games played and win statistics.

## How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/CCT-2021368/ca2-game-mechanics.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ca2-game-mechanics
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Install the WebSocket server:
    ```bash
    npm install ws
    ```
    
5. Run the server:
    ```bash
    node myServer.js
    ```
5. Open your browser and go to `http://localhost:3000` to start playing.


