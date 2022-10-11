import React, { useState } from "react";
import "./Cart.css";
import PizzaItem from "./Pizza-item/PizzaItem";

export default function Cart({ arr, setCart }) {
  let startTottalPrice = 0;
  let cartArr = [];

  if (arr.length > 0) {
    startTottalPrice = arr
      .map((pizza) => pizza.price.small)
      .reduce((a, b) => a + b);

    cartArr = arr.map((pizza) => {
      return {
        ...pizza,
        quantity: 1,
        selectedSize: "small",
        totalPrice: pizza.price.small,
      };
    });
  }

  const [totalItems, setTotalItems] = useState(arr.length);
  const [totalPrice, setTotalPrice] = useState(startTottalPrice);
  const [pizzaArr, setPizzaArr] = useState(cartArr);

  const changeOrder = (order, id) => {
    pizzaArr[id] = order;
    setPizzaArr(pizzaArr);
    const myTotalItems = pizzaArr
      .map((pizza) => pizza.quantity)
      .reduce((a, b) => +a + +b, 0);
    const myTotalPrice = pizzaArr
      .map((pizza) => pizza.totalPrice)
      .reduce((a, b) => +a + +b, 0);
    setTotalItems(myTotalItems);
    setTotalPrice(myTotalPrice);
  };

  const deleteOrder = (name) => {
    const updatedArr = pizzaArr.filter((pizza, index) => {
      return pizza.name !== name;
    });
    setPizzaArr(updatedArr);
    const updatedCartArr = arr.filter((pizza, index) => {
      return pizza.name !== name;
    });
    setCart(updatedCartArr);
    const myTotalItems = updatedArr
      .map((pizza) => pizza.quantity)
      .reduce((a, b) => +a + +b, 0);
    const myTotalPrice = updatedArr
      .map((pizza) => pizza.totalPrice)
      .reduce((a, b) => +a + +b, 0);
    setTotalItems(myTotalItems);
    setTotalPrice(myTotalPrice);
  };

  return (
    <div className="cart-wrapper">
      <div className="container">
        <section className="order-wrapper">
          {pizzaArr.length > 0 ? (
            pizzaArr.map((pizza, index) => {
              return (
                <PizzaItem
                  testArr={pizzaArr}
                  pizza={pizza}
                  key={index}
                  changeOrder={changeOrder}
                  deleteOrder={deleteOrder}
                  id={index}
                />
              );
            })
          ) : (
            <p>Your cart is empty.</p>
          )}
        </section>
      </div>
      <section className="total-wrapper">
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice}</p>
      </section>
    </div>
  );
}
