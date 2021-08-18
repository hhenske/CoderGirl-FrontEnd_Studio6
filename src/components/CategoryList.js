import React, { useState } from "react";
import GroceryItem from "./GroceryItem";

const CategoryList = props => {
  const { categoryName, filteredGroceryList, setGroceryList } = props;
  const [inputVal, setInputVal] = useState("");

  const handleInputKeyPress = e => {
    let duplicateFlag = false;
    if (e.key === "Enter" && inputVal) {
      filteredGroceryList.forEach(item => {
        if (item.name === inputVal) {
          console.log("Duplicate item");
          duplicateFlag = true;
        }
      });
      if (!duplicateFlag) {
        setGroceryList(prevList => [
          ...prevList,
          {
            name: inputVal,
            checked: false,
            category: categoryName,
          },
        ]);
      }
      setInputVal("");
    }
  };

  return (
    <div className="List">
      <h2>{categoryName}</h2>
      {filteredGroceryList.length === 0 ? (
        <p>No items yet!</p>
      ) : (
        <ul className={categoryName}>
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
