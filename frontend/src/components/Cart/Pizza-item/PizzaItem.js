import React, { useState } from "react";
import "./PizzaItem.css";

export default function PizzaItem({ pizza, changeOrder, id }) {
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState(pizza);
  const changeSize = (e) => {
    setSize(e.target.value);
    const updTotalPrice = order.quantity * order.price[e.target.value];
    setOrder({
      ...order,
      totalPrice: updTotalPrice,
      selectedSize: e.target.value,
    });
    changeOrder(
      {
        ...order,
        totalPrice: updTotalPrice,
        selectedSize: e.target.value,
      },
      id
    );
  };
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
    const updTotalPrice = e.target.value * order.price[order.selectedSize];
    setOrder({ ...order, quantity: e.target.value, totalPrice: updTotalPrice });
    changeOrder(
      { ...order, quantity: e.target.value, totalPrice: updTotalPrice },
      id
    );
  };
  return (
    <section className="pizza-wrapper">
      <div className="image-wrapper">
        <img src={order.img} alt={order.name} />
      </div>
      <div className="text-wrapper">
        <h3 className="pizza-name">
          {order.name}
          {order.isVegetarian && "🌱"}
        </h3>
        <div className="ingredients">
          {order.ingredients.map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>
        <p className="pizza-info">{order.info}</p>
      </div>
      <select className="pizza-size" onChange={(e) => changeSize(e)}>
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
          onChange={(e) => changeQuantity(e)}
        />
      </div>
      <div className="price-wrapper">
        <h3>{order.totalPrice}€</h3>
        <h4>{order.price[size]}€</h4>
      </div>
    </section>
  );
}
