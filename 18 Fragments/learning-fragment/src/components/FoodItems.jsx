import { useState } from "react";
import Item from "./Item";
function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((foodItem) => {
        return (
          <Item
            key={foodItem}
            bought={activeItems.includes(foodItem)}
            foodItem={foodItem}
            handleBuyButtonClicked={(event) =>
              onBuyButton(foodItem, event)
            }></Item>
        );
      })}
    </ul>
  );
}
export default FoodItems;
