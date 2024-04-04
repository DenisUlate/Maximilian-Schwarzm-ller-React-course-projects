import React, { useState, useRef } from "react";

const ProjectForm = ({ onAddProject, onCancel }) => {
	const [title, setTitle] = useState(""); // State para almacenar el título del proyecto
	const [description, setDescription] = useState(""); // State para almacenar la descripción del proyecto
	const [dueDate, setDueDate] = useState(""); // State para almacenar la fecha de vencimiento del proyecto
	const idRef = useRef(1); // Referencia mutable para almacenar el ID del proyecto

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddProject({ id: idRef.current, title, description, dueDate }); // Llama a la función onAddProject pasando los datos del proyecto
		setTitle(""); // Limpia el campo de título
		setDescription(""); // Limpia el campo de descripción
		setDueDate(""); // Limpia el campo de fecha de vencimiento
		idRef.current += 1; // Incrementa el ID del proyecto
	};

	const handleCancel = () => {
		setTitle(""); // Limpia el campo de título
		setDescription(""); // Limpia el campo de descripción
		setDueDate(""); // Limpia el campo de fecha de vencimiento
		onCancel(); // Llama a la función onCancel para cancelar la creación del proyecto
	};

	return (
		<form className="flex flex-col p-4 relative" onSubmit={handleSubmit}>
			<div className="w-full order-2 flex flex-col">
				<label className="text-sm text-stone-900 font-bold uppercase">
					Title
				</label>
				<input
					className="placeholder-stone-500/25 bg-stone-400 border-stone-900 border rounded-sm"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Title"
				/>
				<label className="text-sm text-stone-900 font-bold uppercase">
					Description
				</label>
				<textarea
					rows={4}
					cols={50}
					className="placeholder-stone-500/25 bg-stone-400 border-stone-900 border rounded-sm"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Description"
				/>
				<label className="text-sm text-stone-900 font-bold uppercase">
					Due Date
				</label>
				<input
					type="date"
					className="placeholder-stone-500/25 bg-stone-400 border-stone-900 border rounded-sm"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
					placeholder="Due Date"
				/>
			</div>
			<div className="order-1 flex gap-8 justify-end w-full my-4">
				<button
					className="border border-stone-800 hover:bg-stone-800 hover:text-white px-4 py-2 text-lg font-semibold uppercase w-[6rem]"
					type="reset"
					onClick={handleCancel}>
					Cancel
				</button>
				<button
					className="bg-stone-800 hover:bg-transparent hover:text-stone-800 hover:border hover:border-stone-800 text-white px-4 py-2 text-lg font-semibold uppercase w-[6rem]"
					type="submit">
					Save
				</button>
			</div>
		</form>
	);
};

export default ProjectForm;
