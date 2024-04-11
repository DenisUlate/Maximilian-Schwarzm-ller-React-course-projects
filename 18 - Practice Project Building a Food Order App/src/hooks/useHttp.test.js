import useHttp from "./useHttp";

describe("useHttp", () => {
	test("should fetch data successfully", async () => {
		const url = "https://api.example.com/data";
		const config = { method: "GET" };
		const initialData = null;

		/**
		 * Renders a custom hook and returns the result and a function to wait for the next update.
		 *
		 * @returns {Object} An object containing the result and waitForNextUpdate function.
		 */
		const { result, waitForNextUpdate } = renderHook(() =>
			useHttp(url, config, initialData)
		);

		expect(result.current.isLoading).toBe(true);

		await waitForNextUpdate();

		expect(result.current.isLoading).toBe(false);
		expect(result.current.data).toEqual({ foo: "bar" });
		expect(result.current.error).toBeNull();
	});

	test("should handle request error", async () => {
		const url = "https://api.example.com/data";
		const config = { method: "POST" };
		const initialData = null;

		const { result, waitForNextUpdate } = renderHook(() =>
			useHttp(url, config, initialData)
		);

		expect(result.current.isLoading).toBe(true);

		await waitForNextUpdate();

		expect(result.current.isLoading).toBe(false);
		expect(result.current.data).toBeNull();
		expect(result.current.error).toBe("Request failed");
	});

	test("should clear data", () => {
		const url = "https://api.example.com/data";
		const config = { method: "GET" };
		const initialData = { foo: "bar" };

		const { result } = renderHook(() => useHttp(url, config, initialData));

		act(() => {
			result.current.clearData();
		});

		expect(result.current.data).toEqual(initialData);
	});
});
