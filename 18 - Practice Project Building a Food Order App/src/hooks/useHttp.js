import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
	const response = await fetch(url, config);

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || "Request failed!");
	}

	return resData;
}

/**
 * Custom hook for making HTTP requests.
 *
 * @param {string} url - The URL to send the request to.
 * @param {object} config - The configuration object for the request.
 * @param {any} initialData - The initial data for the hook.
 * @returns {object} - An object containing isLoading, data, error, sendRequest, and clearData.
 */
export default function useHttp(url, config, initialData) {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	/**
	 * Clears the data stored in the hook.
	 */
	function clearData() {
		setData(initialData);
	}

	/**
	 * Sends an HTTP request.
	 *
	 * @param {any} data - The data to send with the request.
	 */
	const sendRequest = useCallback(
		async function sendRequest(data) {
			setIsLoading(true);
			try {
				const resData = await sendHttpRequest(url, { ...config, body: data });
				setData(resData);
			} catch (error) {
				setError(error.message) || "Request failed!";
			}

			setIsLoading(false);
		},
		[url, config]
	);

	useEffect(() => {
		if ((config && config.method === "GET") || !config.method) {
			sendRequest();
		}
	}, [sendRequest, config]);

	return {
		isLoading,
		data,
		error,
		sendRequest,
		clearData,
	};
}
