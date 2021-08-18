import React from "react";

const GroceryItem = props => {
  const { item, setGroceryList } = props;

  const handleItemClick = () => {
    setGroceryList(prevList =>
      prevList.map(prevItem => {
        if (prevItem.name === item.name) {
          return { ...prevItem, checked: !item.checked };
        }
        return prevItem;
      })
    );
  };

  const handleDelBtnClick = e => {
    setGroceryList(prevList =>
      prevList.filter(prevItem => prevItem.name !== item.name)
    );
  };

  return (
    <li className={item.checked ? "checked" : ""}>
      <p onClick={handleItemClick}>{item.name}</p>
      <button className="delete-btn" onClick={handleDelBtnClick} />
    </li>
  );
};

export default GroceryItem;
