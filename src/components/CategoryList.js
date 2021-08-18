import React, { useState } from "react";
import GroceryItem from "./GroceryItem";

const CategoryList = props => {
  const { category, filteredGroceryList, setGroceryList } = props;
  const [inputVal, setInputVal] = useState("");

  const handleInputKeyPress = e => {
    if (e.key === "Enter" && inputVal) {
      setGroceryList(prevList => [
        ...prevList,
        {
          name: inputVal,
          checked: false,
          category: category,
        },
      ]);
      setInputVal("");
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
        value={inputVal}
        onKeyDown={handleInputKeyPress}
        onChange={e => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default CategoryList;
