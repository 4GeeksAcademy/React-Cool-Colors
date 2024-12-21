import React from "react";

// components
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Hero from "./Hero.jsx"

const Home = () => {

	const generateRandomColor = () => {
		const hexValues = "0123456789ABCDEF";
		let color = '#';

		for(let i = 0; i < 6; i ++){
			color += hexValues[Math.floor(Math.random()*hexValues.length)];
		}
		return color;
	}

	const newColor = generateRandomColor();

	return (
		<div className="text-center d-flex flex-column
			w-100 min-vh-100
			justify-content-between"

			style={{
				backgroundColor: newColor,
			}}
		>
			<Navbar />
			<Hero/>
			<Footer/>
		</div>
	);
};

export default Home;