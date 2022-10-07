import React, { useState } from "react";
import "./Cart.css";
import PizzaItem from "./Pizza-item/PizzaItem";

const arr = [
  {
    name: "Margherita",
    ingredients: ["Mozzarella", "Tomate"],
    info: "Einfach unwiderstehlich! Knusprig-dünner glutenfreier Pizzaboden mit fruchtiger Tomatensoße, üppig belegt mit extra viel laktosefreiem Mozzarella. So einfach, so gut!",
    isVegetarian: true,
    img: "https://www.bofrost.de/medias/01794-DE-la-pizza-mini-margherita-pic1.jpg-W340xH283R1.2?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE2MTcyM3xpbWFnZS9qcGVnfGhmMC9oYTIvOTYxMjQzODQzNzkxOC8wMTc5NF9ERV9sYS1waXp6YS1taW5pLW1hcmdoZXJpdGFfcGljMS5qcGdfVzM0MHhIMjgzUjEuMnxkNWE3M2JhZWVjYzMzNmFiMjJhZjcyODI5OTZjZmYxMDE0Y2EwYzFiNDExMTZmZjU1MTg5YWY4ODRjZWE5NTAy",
    price: {
      big: 10,
      medium: 8,
      small: 6,
    },
  },
  {
    name: "La Pizza grande rucola con prosciutto",
    ingredients: ["Mozzarella", "Schinken", "Rucola"],
    info: "Extra grande – extra lecker: original italienische Pizzakreation mit knusprig-dünnem Boden, belegt mit Tomaten, Mozzarella und feinem Rucola.",
    isVegetarian: false,
    img: "https://pizzerialamia.sk/assets/images/products/196/55-(kopirovat).jpg",
    price: {
      big: 12,
      medium: 8,
      small: 5,
    },
  },
];

export default function Cart() {
  const startTottalPrice = arr
    .map((pizza) => pizza.price.small)
    .reduce((a, b) => a + b);

  const [totalItems, setTotalItems] = useState(arr.length);
  const [totalPrice, setTotalPrice] = useState(startTottalPrice);
  return (
    <div className="cart-wrapper">
      <section className="order-wrapper">
        {arr.map((pizza, index) => (
          <PizzaItem pizza={pizza} key={index} />
        ))}
      </section>
      <section className="total-wrapper">
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice}</p>
      </section>
    </div>
  );
}
