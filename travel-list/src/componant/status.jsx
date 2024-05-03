import React from "react";
export default function Status({ items }) {
  if (items.length === 0)
    return (
      <p className="status">
        <em>Add some items in your bag.</em>
      </p>
    );
  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numOfPackedItems / numOfItems) * 100);
  return (
    <footer className="status">
      {packedPercentage === 100 ? (
        <h3>You all set, ready to go ✈️</h3>
      ) : (
        <h3>
          💼You have {numOfItems} items in your list and you already packed{" "}
          {numOfPackedItems} ({packedPercentage}%)
        </h3>
      )}
    </footer>
  );
}
