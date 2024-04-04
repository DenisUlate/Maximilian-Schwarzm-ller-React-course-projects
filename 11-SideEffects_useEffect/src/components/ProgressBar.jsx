import React, { useState, useEffect } from "react";

const ProgressBar = ({ timer }) => {
	const [progress, setProgress] = useState(timer);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => prev - 100);
		}, 100);

		// stop the interval when the component is unmounted
		return () => {
			clearInterval(interval);
		};
	}, []);
	return <progress max={timer} value={progress} />;
};

export default ProgressBar;
