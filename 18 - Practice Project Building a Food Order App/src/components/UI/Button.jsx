import React from "react";

const Button = ({ children, textOnly, className, ...props }) => {
	const cssClasses = textOnly
		? `button-text ${className}`
		: `button ${className}`;
	return (
		<button className={cssClasses} {...props}>
			{children}
		</button>
	);
};

export default Button;
