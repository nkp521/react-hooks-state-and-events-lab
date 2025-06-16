import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const itemsToDisplay = items.filter((item) => {
    if (category === "All") return true;
    return item.category === category;
  });

  const renderItems = () => {
    return itemsToDisplay.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ));
  };
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={category} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">{renderItems()}</ul>
    </div>
  );
}

export default ShoppingList;
