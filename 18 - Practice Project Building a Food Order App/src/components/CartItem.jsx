import React from "react";
import { currencyFormatter } from "../util/formatting";

/**
 * Represents a single item in the cart.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the item.
 * @param {number} props.quantity - The quantity of the item.
 * @param {number} props.price - The price of the item.
 * @param {Function} props.onIncrease - The function to handle increasing the quantity of the item.
 * @param {Function} props.onDecrease - The function to handle decreasing the quantity of the item.
 * @returns {JSX.Element} The rendered CartItem component.
 */
const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
	return (
		<li className="cart-item">
			<p>
				{name} - {quantity} x {currencyFormatter.format(price)}
			</p>

			<p className="cart-item-actions">
				<button onClick={onDecrease}>-</button>
				<span>{quantity}</span>
				<button onClick={onIncrease}>+</button>
			</p>
		</li>
	);
};

export default CartItem;
