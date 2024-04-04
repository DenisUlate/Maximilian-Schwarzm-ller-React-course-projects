import React from "react";
import ProjectForm from "./ProjectForm";
import logo from "../assets/no-projects.png";
import TaskForm from "./TaskForm";

const Main = ({
	projects, // Array of projects
	onAddProject, // Function to add a new project
	onDeleteProject, // Function to delete a project
	showForm, // Boolean to determine if the project form should be shown
	onCancel, // Function to cancel the project form
	onShowForm, // Function to show the project form
	selectedProject, // Selected project object
	onAddTask, // Function to add a task to the selected project
	onDeleteTask, // Function to delete a task from the selected project
}) => {
	return (
		<div className="bg-stone-400 w-full">
			<h2 className="text-center p-6 text-xl uppercase tracking-widest">
				Project Manager
			</h2>
			{showForm ? (
				// Show project form if showForm is true
				<ProjectForm onAddProject={onAddProject} onCancel={onCancel} />
			) : selectedProject ? (
				// Show selected project details if a project is selected
				<div>
					<div className="flex p-8 border-b-stone-500 border-b">
						<div className=" w-full flex flex-col">
							<h3 className="order-1 text-2xl font-semibold">
								{selectedProject.title}
							</h3>
							<p className="order-3">{selectedProject.description}</p>
							<p className="order-2">{selectedProject.dueDate}</p>
						</div>
						<button
							className="w-[6rem] h-[2rem] bg-stone-600 text-white hover:bg-stone-200 hover:border-stone-600 hover:text-stone-600"
							onClick={() => onDeleteProject(selectedProject.id)}>
							{" "}
							Delete
						</button>
					</div>

					<div className="p-8">
						<h3 className="text-2xl font-semibold py-4">Tasks</h3>
						<TaskForm
							onAddTask={(task) => onAddTask(selectedProject.id, task)}
						/>
						{selectedProject.tasks.length === 0 ? (
							<p className="py-2">This project does not have any tasks yet.</p>
						) : (
							selectedProject.tasks.map((task) => (
								<p
									className=" bg-stone-500 rounded-md text-white p-6 flex justify-between mb-2"
									key={task.id}>
									{task.text}
									<button
										onClick={() => onDeleteTask(selectedProject.id, task.id)}>
										Clear
									</button>
								</p>
							))
						)}
					</div>
				</div>
			) : projects.length >= 0 ? (
				// Show message if no projects are selected
				<div className="flex flex-col gap-8 items-center mt-16">
					<img src={logo} alt="No Projects" className="w-1/6" />
					<p className="font-semibold text-xl">No Projects Selected</p>
					<p className="">Select a project or get started with a new one</p>
					<button
						className="flex items-center justify-center mx-auto  bg-zinc-600 rounded-md text-white p-2 mb-4 w-[10rem] mt-8"
						onClick={onShowForm}>
						Create a new Project
					</button>
				</div>
			) : null}
		</div>
	);
};

export default Main;
