import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

/**
 * Represents the Cart component.
 * @component
 */
const Cart = () => {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		return totalPrice + item.price * item.quantity;
	}, 0);

	function handleCloseCart() {
		userProgressCtx.hideCart();
	}

	function handleCheckout() {
		userProgressCtx.showCheckout();
	}

	return (
		<Modal
			className="cart"
			open={userProgressCtx.progress === "cart"}
			onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						{...item}
						onDecrease={() => cartCtx.removeItem(item.id)}
						onIncrease={() => cartCtx.addItem(item)}
					/>
				))}
			</ul>
			<p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
			<p className="modal-actions">
				<Button textOnly onClick={handleCloseCart}>
					Close
				</Button>
				{cartCtx.items.length > 0 ? (
					<Button onClick={handleCheckout}>Go to Checkout</Button>
				) : null}
			</p>
		</Modal>
	);
};

export default Cart;
