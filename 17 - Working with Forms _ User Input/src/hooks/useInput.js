import { useState } from "react";

export function useInput(defaultValue, validationFn) {
	const [enteredValue, setEnteredValue] = useState(defaultValue);
	const [didEdit, setDidEdit] = useState(false);

	const valueIsValid = validationFn(enteredValue);

	function handleInputBlur() {
		setDidEdit(true);
	}

	function handleInputChange(event) {
		setEnteredValue(event.target.value);
		setDidEdit(false);
	}

	return {
		value: enteredValue,
		handleInputBlur,
		handleInputChange,
		hasError: didEdit && !valueIsValid,
	};
}
