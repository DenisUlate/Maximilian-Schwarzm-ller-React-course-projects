import Header from "./components/Header/Header.jsx";
import CoreSections from "./components/CoreSections.jsx";
import Examples from "./components/Examples.jsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<CoreSections />
				<Examples />
			</main>
		</>
	);
}

export default App;
