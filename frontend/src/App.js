import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

import PizzaList from "./components/PizzaList";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";


function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (order) => {
    setCart([...cart, order]);
  };

  return (
    <Router>
      <div className="home">
        <header>
          <div className="logo">
            <span>p</span>
            <span>i</span>
            <span>z</span>
            <span>z</span>
            <span>a</span>
            <span></span>
          </div>
          <div className="title">Pizza lio</div>
          <div className="pizza-letter"></div>
          <nav className="nav">
            <NavLink to="/" className="nav-link home-nav">
              <div>Home</div>
            </NavLink>
            <NavLink to="/cart" className="nav-link cart">
              <div>Cart</div>
            </NavLink>
            <NavLink to="/about" className="nav-link about-us">
              <div>About us</div>
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path={"/"}
            element={<PizzaList addToCart={addToCart} orders={cart.length} />}
          />
          <Route
            path={"/cart"}
            element={<Cart arr={cart} setCart={setCart} />}
          />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
