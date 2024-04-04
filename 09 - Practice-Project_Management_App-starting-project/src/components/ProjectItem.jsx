import React from "react";

const ProjectItem = ({ project, onDeleteProject }) => {
	return (
		<div className="flex">
			<li className="w-full flex flex-col gap-2">
				<h3 className="text-2xl font-semibold order-1">{project.title}</h3>
				<p className="order-3 ">{project.description}</p>
				<p className="order-2">{project.dueDate}</p>
			</li>
			<button
				className="w-[8rem] h-[2rem] rounded-md bg-stone-800 text-white hover:bg-stone-500"
				onClick={() => onDeleteProject(project.id)}>
				Delete
			</button>
		</div>
	);
};

export default ProjectItem;
