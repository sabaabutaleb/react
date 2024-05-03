import React, { useState } from "react";
// import PackingList from "./packingList";

export default function Item({ item, onDeleteItem, onHandleToggle }) {
  return (
    <li className="">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onHandleToggle(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>

      {/* <span onClick={() => onDeleteItem(itemObj.id)} class="close">
        &times;
      </span> */}
      <button onClick={() => onDeleteItem(item.id)}>❎</button>
    </li>
  );
}

// export default function Item(item) {
//   return (
// <li className="">
//   <input type="checkbox"></input>
//   <p>
//     <span>{item.quantity} </span>
//     {item.description}
//   </p>
//   <span class="close">&times;</span>
// </li>
// );
// }
