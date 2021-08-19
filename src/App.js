import React, { useState } from "react";
import "./App.css";
import { STARTER_LIST } from "./data/starterList";
import { CATEGORIES } from "./data/categoriesList";
import CategoryList from "./components/CategoryList";

const App = () => {
    const [groceryList, setGroceryList] = useState(STARTER_LIST);

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <div className="List__Container">
       
        { CATEGORIES.map((category) => (
          <CategoryList  
          key= {category}
          category={category} 
          filteredGroceryList={groceryList.filter(
            item => item.category === category)}
            setGroceryList={setGroceryList}
          />
        ))}
        {/* First try to just make the category names appear before implementing <CategoryList> components */}
      </div>
    </div>
  );
};

export default App;
