import { createContext, useState } from "react";

const UserProgressContext = createContext({
	progress: "", // "cart", "checkout"
	showCart: () => {},
	hideCart: () => {},
	showCheckout: () => {},
	hideCheckout: () => {},
});

/**
 * Provides a context for managing user progress in the food order app.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The user progress context provider component.
 */
export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState("");

	/**
	 * Sets the user progress to "cart".
	 */
	const showCartHandler = () => {
		setUserProgress("cart");
	};

	/**
	 * Sets the user progress to an empty string.
	 */
	const hideCartHandler = () => {
		setUserProgress("");
	};

	/**
	 * Sets the user progress to "checkout".
	 */
	const showCheckoutHandler = () => {
		setUserProgress("checkout");
	};

	/**
	 * Sets the user progress to an empty string.
	 */
	const hideCheckoutHandler = () => {
		setUserProgress("");
	};

	const contextValue = {
		progress: userProgress,
		showCart: showCartHandler,
		hideCart: hideCartHandler,
		showCheckout: showCheckoutHandler,
		hideCheckout: hideCheckoutHandler,
	};

	return (
		<UserProgressContext.Provider value={contextValue}>
			{children}
		</UserProgressContext.Provider>
	);
}

export default UserProgressContext;
