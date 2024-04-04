// Importing necessary components and libraries
import React from "react";

// The GameBoard component represents the game board of the Tic Tac Toe game
const GameBoard = ({ onSelectPlayer, board }) => {
	return (
		// The game board is represented as an ordered list
		<ol id="game-board">
			{/* Iterating over each row of the game board */}
			{board.map((row, rowIndex) => (
				// Each row is represented as a list item
				<li key={rowIndex}>
					{/* Each row is also an ordered list */}
					<ol>
						{/* Iterating over each square in the row */}
						{row.map((playerSymbol, colIndex) => (
							// Each square is represented as a list item
							<li key={colIndex}>
								{/* Each square is a button that can be clicked to make a move */}
								<button
									// When the button is clicked, the onSelectPlayer function is called with the row and column indices
									onClick={() => onSelectPlayer(rowIndex, colIndex)}
									// The button is disabled if the square is already filled (playerSymbol is not null)
									disabled={playerSymbol !== null}>
									{/* The player's symbol (X or O) is displayed on the button */}
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

// Exporting the GameBoard component
export default GameBoard;
