import React, { useState } from "react";
import GroceryItem from "../GroceryItem/GroceryItem";

const CategoryList = props => {
	const { category, filteredGroceryList, setGroceryList } = props;
	const [localInputVal, setLocalInputVal] = useState("");

	const handleInputKeyPress = e => {
		if (e.key === "Enter" && localInputVal) {
			setGroceryList(prevList => [
				...prevList,
				{
					name: localInputVal,
					checked: false,
					category: category,
				},
			]);
			setLocalInputVal("");
		}
	};

	return (
		<div className="List">
			<h2>{category}</h2>
			{filteredGroceryList.length === 0 ? (
				<p>No items yet!</p>
			) : (
				<ul>
					{filteredGroceryList.map(item => (
						<GroceryItem
							key={item.name}
							item={item}
							setGroceryList={setGroceryList}
						/>
					))}
				</ul>
			)}
			<input
				type="text"
				placeholder="Add new item"
				value={localInputVal}
				onKeyDown={handleInputKeyPress}
				onChange={e => setLocalInputVal(e.target.value)}
			/>
		</div>
	);
};

export default CategoryList;
