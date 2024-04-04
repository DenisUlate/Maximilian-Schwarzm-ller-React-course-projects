import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
	const [task, setTask] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		onAddTask(task);
		setTask("");
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				className="bg-stone-500 p-2 mr-4 mb-4"
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TaskForm;
