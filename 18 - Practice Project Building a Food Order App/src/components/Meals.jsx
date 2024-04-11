import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";

const requestConfig = {};

/**
 * Renders a list of meals.
 *
 * @returns {JSX.Element} The rendered Meals component.
 */
const Meals = () => {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp("http://localhost:3000/meals", requestConfig, []);

	if (isLoading) {
		return <p className="center">Loading...</p>;
	}

	if (error) {
		return <Error title="Failed to fetch meals" message={error} />;
	}

	return (
		<>
			{error && <p>{error}</p>}
			<ul id="meals">
				{loadedMeals &&
					loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
			</ul>
		</>
	);
};

export default Meals;
