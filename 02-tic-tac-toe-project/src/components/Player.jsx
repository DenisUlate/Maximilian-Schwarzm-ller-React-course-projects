// Importing necessary components and libraries
import React, { useState } from "react";

// The Player component represents a player in the Tic Tac Toe game
export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	// Using React's useState hook to manage the state of the player's name
	const [playerName, setPlayerName] = useState(initialName);

	// Using React's useState hook to manage the state of whether the player's name is being edited
	const [isEditing, setIsEditing] = useState(false);

	// Function to handle the player clicking the Edit/Save button
	const handleEdit = () => {
		// Toggling the isEditing state
		setIsEditing((isEditing) => !isEditing);

		// If the player's name was being edited, call the onChangeName function to update the player's name
		if (isEditing) {
			onChangeName(symbol, playerName);
		}
	};

	// Function to handle the player changing their name in the input field
	const handleChange = (event) => {
		// Updating the playerName state with the new name
		setPlayerName(event.target.value);
	};

	// Rendering the player
	return (
		// The player is represented as a list item
		// If the player is the active player, the list item has the "active" class
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{/* If the player's name is being edited, an input field is displayed */}
				{/* Otherwise, the player's name is displayed as text */}
				{isEditing ? (
					<input
						type="text"
						value={playerName}
						onChange={handleChange}
						required
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}
				{/* The player's symbol (X or O) is displayed */}
				<span className="player-symbol">{symbol}</span>
			</span>
			{/* The Edit/Save button is displayed */}
			{/* If the player's name is being edited, the button says "Save" */}
			{/* Otherwise, the button says "Edit" */}
			<button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
