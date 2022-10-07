import React, { useState } from "react";
import "./PizzaItem.css";

export default function PizzaItem({ pizza }) {
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState("1");
  return (
    <section className="pizza-wrapper">
      <div className="image-wrapper">
        <img src={pizza.img} alt={pizza.name} />
      </div>
      <div className="text-wrapper">
        <h3 className="pizza-name">
          {pizza.name}
          {pizza.isVegetarian && "🌱"}
        </h3>
        <div className="ingredients">
          {pizza.ingredients.map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>
        <p className="pizza-info">{pizza.info}</p>
      </div>
      <select className="pizza-size" onChange={(e) => setSize(e.target.value)}>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="big">big</option>
      </select>
      <div className="quantity-wrapper">
        <input
          type="number"
          className="pizza-quantity"
          min="1"
          max="10"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="price-wrapper">
        <h3>{pizza.price[size] * quantity}€</h3>
        <h4>{pizza.price[size]}€</h4>
      </div>
    </section>
  );
}
