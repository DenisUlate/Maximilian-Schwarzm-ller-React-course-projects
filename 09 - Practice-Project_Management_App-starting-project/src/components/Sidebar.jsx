import React from "react";
import ProjectTitleList from "./ProjectTitleList";

const Sidebar = ({ onShowForm, projects, onSelectProject }) => {
	return (
		<div className=" w-1/2 px-4 pt-12 border-r bg-stone-900 h-screen text-white">
			<h2 className="text-2xl mb-4 text-white text-center font-bold uppercase">
				Your Projects
			</h2>
			<button
				className="flex items-center justify-center mx-auto  bg-zinc-600 rounded-md text-white p-2 mb-4 w-[10rem] mt-8"
				onClick={onShowForm}>
				+Add Project
			</button>
			<div className="w-full text-xl mx-auto p-2 cursor-pointer">
				<ProjectTitleList
					projects={projects}
					onSelectProject={onSelectProject}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
