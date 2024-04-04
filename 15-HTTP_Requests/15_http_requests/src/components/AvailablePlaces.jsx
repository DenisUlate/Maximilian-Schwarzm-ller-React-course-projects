import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
	const [isLoading, setIsLoading] = useState(true);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		setIsLoading(true);

		async function fetchPlaces() {
			setIsLoading(true); // Set isLoading to true before making the request

			try {
				const places = await fetchAvailablePlaces();

				navigator.geolocation.getCurrentPosition((position) => {
					const lat = position.coords.latitude;
					const lon = position.coords.longitude;
					const sortedPlaces = sortPlacesByDistance(places, lat, lon);
					setAvailablePlaces(sortedPlaces);
					setIsLoading(false); // Set isLoading to false after the request is completed
				});
			} catch (error) {
				setError({
					message:
						error.message || "Could not fetch places, please try again later!",
				});
				setIsLoading(false); // Set isLoading to false after the request is completed
			}
		}

		fetchPlaces();
	}, []);

	if (error) {
		return <Error title="An error occurred!" message={error.message} />;
	}

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isLoading}
			loadingText="Loading places..."
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
