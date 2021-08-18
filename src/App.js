import React, { useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import { STARTER_LIST } from "./data/groceryList";
import { CATEGORIES } from "./data/categoriesList";

const App = () => {
  const [groceryList, setGroceryList] = useState(STARTER_LIST);

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <div className="List__Container">
        {CATEGORIES.map(category => (
          <CategoryList
            key={category}
            category={category}
            filteredGroceryList={groceryList.filter(
              item => item.category === category
            )}
            setGroceryList={setGroceryList}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
