import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
	const [activeTab, setActiveTab] = useState();

	function handleClick(clickedButton) {
		setActiveTab(clickedButton);
		console.log(clickedButton);
	}
	let tabContent = <p>Please select a topic.</p>;

	if (activeTab) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[activeTab].title}</h3>
				<p>{EXAMPLES[activeTab].description}</p>
				<pre>
					<code>{EXAMPLES[activeTab].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept) => (
							<CoreConcepts key={concept.title} {...concept} />
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Time to get started!</h2>
					<menu>
						<TabButton
							isClicked={activeTab === "components"}
							onClick={() => handleClick("components")}>
							Components
						</TabButton>
						<TabButton
							isClicked={activeTab === "jsx"}
							onClick={() => handleClick("jsx")}>
							JSX
						</TabButton>
						<TabButton
							isClicked={activeTab === "props"}
							onClick={() => handleClick("props")}>
							Props
						</TabButton>
						<TabButton
							isClicked={activeTab === "state"}
							onClick={() => handleClick("state")}>
							State
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
