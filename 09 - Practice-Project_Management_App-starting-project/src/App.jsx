import React, { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
	const [projects, setProjects] = useState([]); // State para almacenar los proyectos
	const [showForm, setShowForm] = useState(false); // State para mostrar/ocultar el formulario de creación de proyectos
	const [selectedProject, setSelectedProject] = useState(null); // State para almacenar el proyecto seleccionado

	function checkUniqueIds(projects) {
		const ids = projects.map((project) => project.id); // Obtener los IDs de los proyectos
		const uniqueIds = new Set(ids); // Crear un conjunto de IDs únicos

		if (ids.length !== uniqueIds.size) {
			console.log("Duplicate IDs found"); // Mostrar mensaje si se encuentran IDs duplicados
		} else {
			console.log("All IDs are unique"); // Mostrar mensaje si todos los IDs son únicos
		}
	}

	// Utilizar la función para verificar los IDs únicos
	checkUniqueIds(projects);

	const addProject = (project) => {
		const newProject = { ...project, id: Date.now(), tasks: [] }; // Crear un nuevo proyecto con un ID único y una lista de tareas vacía
		setProjects([...projects, newProject]); // Agregar el nuevo proyecto al estado de proyectos
		setShowForm(false); // Ocultar el formulario de creación de proyectos
	};

	const deleteProject = (id) => {
		setProjects(projects.filter((project) => project.id !== id)); // Filtrar los proyectos y eliminar el proyecto con el ID especificado
		if (selectedProject && selectedProject.id === id) {
			setSelectedProject(null); // Si el proyecto seleccionado se elimina, establecer el proyecto seleccionado como nulo
		}
	};

	const selectProject = (id) => {
		setSelectedProject(projects.find((project) => project.id === id)); // Buscar el proyecto con el ID especificado y establecerlo como proyecto seleccionado
	};

	const onAddTask = (projectId, taskText) => {
		const task = { id: Date.now(), text: taskText }; // Crear una nueva tarea con un ID único y el texto especificado
		setProjects(
			projects.map((project) =>
				project.id === projectId
					? {
							...project,
							tasks: [...project.tasks, task], // Agregar la nueva tarea a la lista de tareas del proyecto correspondiente
					  }
					: project
			)
		);
	};

	const onDeleteTask = (projectId, taskId) => {
		setProjects(
			projects.map((project) =>
				project.id === projectId
					? {
							...project,
							tasks: project.tasks.filter((task) => task.id !== taskId), // Filtrar las tareas del proyecto y eliminar la tarea con el ID especificado
					  }
					: project
			)
		);
	};

	return (
		<div className="flex">
			<Sidebar
				onShowForm={() => setShowForm(true)} // Mostrar el formulario de creación de proyectos al hacer clic en el botón correspondiente en la barra lateral
				projects={projects}
				onDeleteProject={deleteProject} // Eliminar un proyecto al hacer clic en el botón de eliminar en la barra lateral
				onSelectProject={selectProject} // Seleccionar un proyecto al hacer clic en él en la barra lateral
			/>
			<Main
				projects={projects}
				onAddProject={addProject} // Agregar un nuevo proyecto al hacer clic en el botón de agregar en la sección principal
				onDeleteProject={deleteProject} // Eliminar un proyecto al hacer clic en el botón de eliminar en la sección principal
				showForm={showForm}
				onCancel={() => setShowForm(false)} // Ocultar el formulario de creación de proyectos al hacer clic en el botón de cancelar en la sección principal
				onShowForm={() => setShowForm(true)} // Mostrar el formulario de creación de proyectos al hacer clic en el botón de mostrar formulario en la sección principal
				selectedProject={selectedProject} // Pasar el proyecto seleccionado a la sección principal
				onAddTask={onAddTask} // Agregar una nueva tarea al proyecto seleccionado en la sección principal
				onDeleteTask={onDeleteTask} // Eliminar una tarea del proyecto seleccionado en la sección principal
			/>
		</div>
	);
}

export default App;
