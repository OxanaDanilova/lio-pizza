import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PizzaList.css";
import axios from "axios";

function PizzaList({ addToCart, orders }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState(data);
  useEffect(() => {
    async function getData() {
      const apiData = await axios.get("http://localhost:5000/pizza");
      setData(apiData.data);
      setData2(apiData.data);
    }
    getData();
  }, []);
  function cartHandler(e) {
    const cartFilter = data.filter((el) => el.name === e.target.name);
    const cartObject = cartFilter[0];
    addToCart(cartObject);
    //setOrderNum(cart.length + 1);
  }
  function searchHandler(e) {
    if (e.target.value === "All") {
      setData2(data);
    } else {
      const filteredData = data.filter((el) => el.name === e.target.value);
      setData2(filteredData);
    }
  }
  return (
    <main>
      <section className="cards">
        {data2
          .map((card) => {
            return (
              <div className="card" key={card._id}>
                <div className="card-img">
                  <img src={card.img} alt="Foto not avalible" />
                </div>
                <div className="card-name">{card.name}</div>
                <div className="card-info">{card.info}</div>
                <button
                  className="cart-btn"
                  name={card.name}
                  onClick={cartHandler}
                >
                  Add to Cart
                </button>
              </div>
            );
          })
          }
      </section>
      <div className="sidebar">
        <div className="search">
          <form action="">
            <label htmlFor="search"></label>
            <select className="select" id="search" onChange={searchHandler}>
              <option value="All">All</option>
              <option value="Capricciosa">Capricciosa</option>
              {/* value={data? data[0].name :""} */}
              <option value="Diavola">Diavola</option>
              <option value="Margherita">Margherita</option>
              <option value="Prosciutto">Prosciutto</option>
              <option value="Wurstel">Wurstel</option>
              <option value="Pizza mit vier K??sesorten">
                Pizza mit vier K??sesorten
              </option>
              <option value="Pizza Salmone">Pizza Salmone</option>
              <option value="Pizza Lio">Pizza Lio</option>
            </select>
          </form>
        </div>
        <div className="sidebar-title">Pizza Lio </div>
        <div className="sidebar-logo">
            <span>p</span>
            <span>i</span>
            <span>z</span>
            <span>z</span>
            <span>a</span>
            <span></span>
          </div>
        
        <div className="address"> Antunisstr.44 65781 K??ln</div>
        <div className="tel">034 767 989 890</div>
        <div
          className="cart-fa"
          data-icon={orders}
          onClick={() => navigate("/cart")}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </main>
  );
}
export default PizzaList;
