import React from "react";
import Item from "./item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Tooth brush", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function PackingList() {
  return (
    <div className="list">
      <ul>
        {/* {initialItems.map((item)=><Item description={item.description} quantity={item.quantity} packed={item.packed} key={item.id}/>)} */}
        {initialItems.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>

      <div>
        <select>
          <option>sort by input order</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
}
export default PackingList;
