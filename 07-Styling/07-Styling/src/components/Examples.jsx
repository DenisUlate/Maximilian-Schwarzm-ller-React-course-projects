import React from "react";
import { EXAMPLES } from "../data";
import TabButton from "../components/TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

const Examples = () => {
	const [activeTab, setActiveTab] = useState();

	function handleClick(clickedButton) {
		setActiveTab(clickedButton);
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
		<Section title="Examples" id="examples">
			<Tabs
				buttonsContainer="menu"
				buttons={
					<>
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
					</>
				}>
				{tabContent}
			</Tabs>
		</Section>
	);
};

export default Examples;
