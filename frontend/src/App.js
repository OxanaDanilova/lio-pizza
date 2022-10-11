import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import PizzaList from "./components/PizzaList";
import Cart from "./components/Cart/Cart";

function App() {
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
            <NavLink className="nav-link about-us">
              <div>About us</div>
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route path={"/"} element={<PizzaList />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
