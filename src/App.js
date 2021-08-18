import React, { useState } from "react";
import "./App.css";
import { STARTER_LIST } from "./data/starterList";
import { CATEGORIES } from "./data/categoriesList";

const App = () => {
	return (
		<div className="App">
			<h1>Grocery List</h1>
			<div className="List__Container">
				{/* TODO: Map over CategoRries to display a <CategoryList> component for each category */}
				{/* First try to just make the category names appear before implementing <CategoryList> components */}
			</div>
		</div>
	);
};

export default App;
