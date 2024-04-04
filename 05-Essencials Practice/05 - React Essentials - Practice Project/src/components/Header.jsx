import React from "react";
import logoImg from "../assets/investment-calculator-logo.png";

const Header = () => {
	return (
		<div className="flex flex-col justify-center items-center p-6">
			<img
				className="w-[5rem] h-[5rem] object-cover my-4"
				src={logoImg}
				alt="Logoimg"
			/>
			<h1 className="font-bold text-2xl">React Investment Calculator</h1>
		</div>
	);
};

export default Header;
