import React from "react";

// components
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Hero from "./Hero.jsx"
import ColorsTable from "./ColorsTable.jsx"

import Coolors from "./Coolors.jsx"
import { generateRandomColor } from "../utils/GenerateRandomColor.js";

const Home = () => {

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
			{/* <Coolors /> */}
			<ColorsTable />
			<Footer/>
		</div>
	);
};

export default Home;