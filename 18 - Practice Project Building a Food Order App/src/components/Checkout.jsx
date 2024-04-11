import React from "react";
import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
};

/**
 * Represents the checkout component.
 * This component is responsible for rendering the checkout form, handling form submission,
 * and displaying success or error messages.
 *
 * @returns {JSX.Element} The JSX element representing the checkout component.
 */
const Checkout = () => {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const {
		data,
		isLoading: isSending,
		error,
		sendRequest,
		clearData,
	} = useHttp("http://localhost:3000/orders", requestConfig);

	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		return totalPrice + item.price * item.quantity;
	}, 0);

	function handleCloseCheckout() {
		userProgressCtx.hideCheckout();
	}

	function handleFinishCheckout() {
		userProgressCtx.hideCheckout();
		cartCtx.clearCart();
		clearData();
	}

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const customerData = Object.fromEntries(formData.entries());

		sendRequest(
			JSON.stringify({
				order: {
					customer: customerData,
					items: cartCtx.items,
				},
			})
		);
	}

	let actions = (
		<p className="modal-actions">
			<Button type="button" textOnly onClick={handleCloseCheckout}>
				Cancel
			</Button>
			<Button>Submit Order</Button>
		</p>
	);

	if (isSending) {
		actions = <p className="center">Sending order data...</p>;
	}

	if (data && !error) {
		return (
			<Modal
				open={userProgressCtx.progress === "checkout"}
				onClose={handleCloseCheckout}>
				<h2>Success!</h2>
				<p>Your order was submitted successfully.</p>
				<p>
					We will get back to you with more details via email within the next
					few minutes
				</p>
				<p className="modal-actions">
					<Button onClick={handleFinishCheckout}>Okay</Button>
				</p>
			</Modal>
		);
	}
	return (
		<Modal
			open={userProgressCtx.progress === "checkout"}
			onClose={handleCloseCheckout}>
			<form onSubmit={handleSubmit}>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

				<Input label="Full Name" id="name" type="text" />
				<Input label="E-Mail Address" id="email" type="email" />
				<Input label="Street" id="street" type="text" />

				<div className="control-row">
					<Input label="Postal Code" id="postal-code" type="text" />
					<Input label="City" id="city" type="text" />
				</div>
				{error && <Error title="Failed to submit order" message={error} />}
				{actions}
			</form>
		</Modal>
	);
};

export default Checkout;
