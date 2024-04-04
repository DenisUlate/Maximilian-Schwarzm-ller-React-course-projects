// Importing necessary components and libraries
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { winning_combination } from "./winning_combination.js";
import GameOver from "./components/GameOver";

// Defining the players
const PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};

// Defining the initial state of the game board
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

// Function to determine the active player based on the game turns
function derivaActivePlayer(gameTurns) {
	let currentPlayer = "X";

	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}

	return currentPlayer;
}

// Function to derive the current state of the game board based on the game turns
function deriveGameBoard(gameTurns) {
	// Creating a deep copy of the initial game board
	let gameBoard = [...initialGameBoard.map((array) => [...array])];

	// Iterating over each turn and updating the game board accordingly
	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}
	return gameBoard;
}

// Function to determine the winner of the game based on the current state of the game board
function deriveWinner(gameBoard, players) {
	let winner;

	// Iterating over each winning combination to check if any player has won
	for (const combination of winning_combination) {
		const firstSquare = gameBoard[combination[0].row][combination[0].col];
		const secondSquare = gameBoard[combination[1].row][combination[1].col];
		const thirdSquare = gameBoard[combination[2].row][combination[2].col];

		// If all squares in a combination are filled by the same player, that player is the winner
		if (
			firstSquare &&
			firstSquare === secondSquare &&
			firstSquare === thirdSquare
		) {
			winner = players[firstSquare];
			console.log("winner");
		}
	}

	return winner;
}

// The main component of the Tic Tac Toe game
function App() {
	// Using React's useState hook to manage the state of the players
	const [players, setPlayers] = useState(PLAYERS);

	// Using React's useState hook to manage the state of the game turns
	const [gameTurns, setGameTurns] = useState([]);

	// Deriving the active player, game board, and winner based on the current game turns
	const activePlayer = derivaActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);

	// Checking if the game is a draw (all squares are filled and there is no winner)
	const hasDraw = gameTurns.length === 9 && !winner;

	// Function to handle a player's turn
	const handleActivePlayer = (rowIndex, colIndex) => {
		setGameTurns((prevGameTurns) => {
			const currentPlayer = derivaActivePlayer(prevGameTurns);

			// Updating the game turns with the new turn
			const updatedTurns = [
				{
					square: { row: rowIndex, col: colIndex },
					player: currentPlayer,
				},
				...prevGameTurns,
			];

			return updatedTurns;
		});
	};

	// Function to restart the game
	function hadleRestartGame() {
		setGameTurns([]);
	}

	// Function to handle a player changing their name
	function handlePlayerNameChange(symbol, newName) {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
		});
	}

	// Rendering the game
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					{/* Rendering the Player components */}
					<Player
						initialName={PLAYERS.X}
						symbol="X"
						isActive={activePlayer === "X"}
						onchangeName={handlePlayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol="O"
						isActive={activePlayer === "O"}
						onchangeName={handlePlayerNameChange}
					/>
				</ol>
				{/* Rendering the GameOver component if the game is over */}
				{(winner || hasDraw) && (
					<GameOver winner={winner} onRestartGame={hadleRestartGame} />
				)}
				{/* Rendering the GameBoard component */}
				<GameBoard onSelectPlayer={handleActivePlayer} board={gameBoard} />
			</div>
			{/* Rendering the Log component */}
			<Log turns={gameTurns} />
		</main>
	);
}

// Exporting the App component
export default App;
