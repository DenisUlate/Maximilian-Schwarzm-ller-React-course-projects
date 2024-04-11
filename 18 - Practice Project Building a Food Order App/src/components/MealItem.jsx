import React, { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

/**
 * Represents a single meal item in the food order app.
 *
 * @component
 * @param {Object} props - The props object containing the meal data.
 * @param {Object} props.meal - The meal object containing the meal details.
 * @returns {JSX.Element} The JSX representation of the MealItem component.
 */
const MealItem = ({ meal }) => {
	const cartCtx = useContext(CartContext);
	function handleAddMealToCart() {
		cartCtx.addItem(meal);
		console.log(meal);
	}
	return (
		<li className="meal-item">
			<article>
				<img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
				<div>
					<h3>{meal.name}</h3>
					<p className="meal-item-price">
						{currencyFormatter.format(meal.price)}
					</p>
					<p className="meal-item-description">{meal.description}</p>
				</div>
				<p className="meal-item-actions">
					<Button onClick={handleAddMealToCart}>Add to Cart</Button>
				</p>
			</article>
		</li>
	);
};

export default MealItem;
