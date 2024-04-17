import React from "react";
import Pizza from "./pizza";
import pizzaList from "../pizzas";
// console.log(pizzas);
const pizzas = pizzaList;
const numOfPizzas = pizzas.length;

function Menu() {
  return (
    <div className="menu">
      <h2 className="menu h2">Our menu</h2>
      <p>Authentic Italian cuision. All from our stove oven.</p>

      {numOfPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaList.map((pizzaItem) => (
            <Pizza
              key={pizzaItem.key}
              Name={pizzaItem.name}
              ingredients={pizzaItem.ingredients}
              price={pizzaItem.price}
              photoName={pizzaItem.photoName}
              soldOut={pizzaItem.soldOut}
            />
          ))}
        </ul>
      ) : (
        <div className="order">
          <p>We are preparing fresh pizza, come back later or order online</p>
          <btn className="btn">Order</btn>
        </div>
      )}
    </div>
  );
}

export default Menu;
