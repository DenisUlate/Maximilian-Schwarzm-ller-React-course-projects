import React from "react";

const ProjectTitleList = ({ projects, onSelectProject }) => {
	return (
		<ul className="flex flex-col gap-4">
			{projects.map((project) => (
				<li key={project.id} onClick={() => onSelectProject(project.id)}>
					{project.title}
				</li>
			))}
		</ul>
	);
};

export default ProjectTitleList;
