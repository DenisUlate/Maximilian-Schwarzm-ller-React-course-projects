export default function TabButton({ children, isClicked, ...props }) {
	return (
		<li>
			<button className={isClicked ? "active" : ""} {...props}>
				{children}
			</button>
		</li>
	);
}
