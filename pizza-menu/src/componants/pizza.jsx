import React from "react";

function Pizza(props) {
  return (
    <li className="pizza">
      <img className="pizza img" src={props.photoName} />
      <div className="pizza div ">
        <h3 className="pizza h3"> {props.Name}</h3>
        <p className="menu h2">{props.ingredients}</p>
        <span className="pizza span">${props.price}</span>
        <p className="pizza p">{props.soldOut}</p>
      </div>
    </li>
  );
}

export default Pizza;
