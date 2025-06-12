import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [colorMode, setColorMode] = useState(false);
  const appClass = colorMode ? "App dark" : "App light";

  const handleColorMode = () => {
    setColorMode((colorMode) => !colorMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleColorMode}>
          {colorMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
