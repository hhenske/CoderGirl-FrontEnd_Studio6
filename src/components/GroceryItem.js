import React from "react";

const GroceryItem = props => {
	const { item } = props;

	const handleItemClick = () => {
		// TODO: Update groceryList state to check/uncheck item
	};

	const handleDelBtnClick = () => {
		// TODO: Update groceryList state to delete item
	};

	return (
		<li className={item.checked ? "checked" : ""}>
			<p onClick={handleItemClick}>{item.name}</p>
			<button className="delete-btn" onClick={handleDelBtnClick} />
		</li>
	);
};

export default GroceryItem;
