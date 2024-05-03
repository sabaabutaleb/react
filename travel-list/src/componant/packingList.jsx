import React, { useState } from "react";
import Item from "./item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Tooth brush", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function PackingList({ items, onDeleteItem, onHandleToggle, onHandleClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {/* {initialItems.map((item)=><Item description={item.description} quantity={item.quantity} packed={item.packed} key={item.id}/>)} */}
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onHandleToggle={onHandleToggle}
            key={item.id}
          />
        ))}
      </ul>

      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="packed">sort by packed</option>
          <option value="description">sort by description</option>
        </select>
        <button onClick={onHandleClear}>Clear List</button>
      </div>
    </div>
  );
}
export default PackingList;
