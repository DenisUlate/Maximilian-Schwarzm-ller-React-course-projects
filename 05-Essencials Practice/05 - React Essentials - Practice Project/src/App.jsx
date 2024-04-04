import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import React, { useState } from "react";
import "./index.css";

function App() {
	const [userInputState, setUserInputState] = useState({
		initialInvestment: 5000,
		annualInvestment: 1000,
		expectedReturn: 6,
		duration: 12,
	});

	const inputIsValid = userInputState.duration >= 1;

	const handleInputChange = (inputIdentifier, newValue) => {
		setUserInputState({
			...userInputState,
			[inputIdentifier]: +newValue,
		});
	};

	return (
		<>
			<Header />
			<Form userInputState={userInputState} onChange={handleInputChange} />
			{!inputIsValid && (
				<p className="center">Please enter a duration gretaer than zero.</p>
			)}
			{inputIsValid && <Table userInput={userInputState} />}
		</>
	);
}

export default App;
