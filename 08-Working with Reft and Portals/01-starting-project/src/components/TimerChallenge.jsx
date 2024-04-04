import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
	const timer = useRef();
	const dialog = useRef();

	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
	const [timerStopped, setTimerStopped] = useState(false);
	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	useEffect(() => {
		if (timeRemaining <= 0 && !timerStopped) {
			clearInterval(timer.current);
			dialog.current.open();
		}
	}, [timeRemaining, timerStopped]);

	function handleStart() {
		setTimerStopped(false);
		timer.current = setInterval(() => {
			setTimeRemaining((prev) => prev - 10);
		}, 10);
	}

	function handleStop() {
		setTimerStopped(true);
		clearInterval(timer.current);
		dialog.current.open();
	}

	function handleReset() {
		setTimerStopped(false);
		setTimeRemaining(targetTime * 1000);
	}

	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} onReset={handleReset} />
			<section className="challenge">
				<h2>{title}</h2>

				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? "Stop" : "Start"} Challenge
					</button>
				</p>
				<p className={timerIsActive ? "active" : undefined}>
					{timerIsActive ? "Time is running..." : "Timer inactive"}
				</p>
			</section>
		</>
	);
};

export default TimerChallenge;
