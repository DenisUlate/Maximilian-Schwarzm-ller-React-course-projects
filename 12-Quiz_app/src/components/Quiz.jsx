import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
	// State to keep track of selected answers
	const [userAnswers, setAnswers] = useState([]);

	// Index of the active question
	const activeQuestionIndex = userAnswers.length;

	// Check if the quiz is over
	const quizIsOver = activeQuestionIndex === QUESTIONS.length;

	// Function to handle selecting an answer
	const handleSelectAnswer = useCallback(function handleSelectAnswer(
		selectedAnswer
	) {
		setAnswers((prevAnswers) => {
			return [...prevAnswers, selectedAnswer];
		});
	},
	[]);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	// If the quiz is over, display the completion message and image
	if (quizIsOver) {
		return <Summary answers={userAnswers} questions={QUESTIONS} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
};

export default Quiz;
