const Form = ({ onChange, userInputState }) => {
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	props.onFormSubmit(userInputState);
	// };
	return (
		<form className="max-w-2xl h-[20rem] flex flex-col justify-center items-center gap-6 rounded-md bg-gradient-to-br from-teal-700 to-[#2b996d] p-8 my-2 mx-auto ">
			<div className="flex w-auto gap-6  justify-between">
				<div>
					<label className="block" htmlFor="initialInvestment">
						Initial Investment
					</label>
					<input
						className="p-1 bg-transparent border rounded-r-md"
						type="number"
						name="initialInvestment"
						value={userInputState.initialInvestment}
						onChange={(event) =>
							onChange("initialInvestment", event.target.value)
						}
					/>
				</div>
				<div className="">
					<label className="block" htmlFor="annualInvestment">
						Annual Investment
					</label>
					<input
						className="p-1 bg-transparent border rounded-r-md"
						type="number"
						name="annualInvestment"
						value={userInputState.annualInvestment}
						onChange={(event) =>
							onChange("annualInvestment", event.target.value)
						}
					/>
				</div>
			</div>
			<div className="flex w-auto gap-6  justify-between">
				<div className="flex flex-col">
					<label htmlFor="expectedReturn">Expected Return</label>
					<input
						className="p-1 bg-transparent border rounded-r-md"
						type="number"
						name="expectedReturn"
						value={userInputState.expectedReturn}
						onChange={(event) => onChange("expectedReturn", event.target.value)}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="duration">Duration</label>
					<input
						className="p-1 bg-transparent border rounded-r-md"
						type="number"
						name="duration"
						value={userInputState.duration}
						onChange={(event) => onChange("duration", event.target.value)}
					/>
				</div>
			</div>
			<button type="submit">Calculate</button>
		</form>
	);
};

export default Form;
