import React, { useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
	const [timeLeft, setTimeLeft] = React.useState(timeout);

	useEffect(() => {
		const timer = setTimeout(onTimeout, timeout);

		return () => clearTimeout(timer);
	}, [timeout, onTimeout]);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft((prevTimeLeft) => prevTimeLeft - 100);
		}, 100);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<progress
			id="question-time"
			value={timeLeft}
			max={timeout}
			className={mode}></progress>
	);
};

export default QuestionTimer;
