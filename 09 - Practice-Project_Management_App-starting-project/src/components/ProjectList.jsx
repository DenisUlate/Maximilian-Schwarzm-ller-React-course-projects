import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, onDeleteProject }) => {
	return (
		<ul className="p-6 border-b-2 border-stone-500">
			{projects.map((project) => (
				<ProjectItem
					key={project.id}
					project={project}
					onDeleteProject={onDeleteProject}
				/>
			))}
		</ul>
	);
};

export default ProjectList;
