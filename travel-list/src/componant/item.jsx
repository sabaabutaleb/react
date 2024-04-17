import React, { useState } from "react";
// import PackingList from "./packingList";

export default function Item({ itemObj }) {
  return (
    <li className="">
      <input type="checkbox"></input>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity}
        {itemObj.description}
      </span>

      <span class="close">&times;</span>
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
