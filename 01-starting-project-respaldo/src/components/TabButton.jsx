export default function TabButton({ children, onClick, isClicked }) {
	return (
		<li>
			<button className={isClicked ? "active" : ""} onClick={onClick}>
				{children}
			</button>
		</li>
	);
}
