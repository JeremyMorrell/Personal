// script.js

// Array to store game data
let games = [];

// Add event listener for form submission
document.getElementById('addGameForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get values from the form
    const gameName = document.getElementById('gameName').value;
    const minPlayers = document.getElementById('minPlayers').value;
    const maxPlayers = document.getElementById('maxPlayers').value;

    // Validate form input
    if (gameName && minPlayers > 0 && maxPlayers >= minPlayers) {
        // Create a new game object
        const newGame = {
            name: gameName,
            minPlayers: parseInt(minPlayers),
            maxPlayers: parseInt(maxPlayers),
            timesPlayed: 0
        };

        // Add the new game to the array
        games.push(newGame);

        // Update the game list on the page
        updateGameList();

        // Clear the form
        document.getElementById('addGameForm').reset();
    } else {
        alert('Please enter valid game details!');
    }
});

// Function to update the game list
function updateGameList() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = ''; // Clear the previous list

    // Loop through each game and create HTML elements for it
    games.forEach((game, index) => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game-item');
        
        gameElement.innerHTML = `
            <h3>${game.name}</h3>
            <p>Players: ${game.minPlayers}-${game.maxPlayers}</p>
            <p>Times Played: ${game.timesPlayed}</p>
            <button onclick="incrementPlays(${index})">Play Again</button>
        `;
        
        gameContainer.appendChild(gameElement);
    });
}

// Function to increment the play count for a game
function incrementPlays(index) {
    games[index].timesPlayed++;
    updateGameList();
}

