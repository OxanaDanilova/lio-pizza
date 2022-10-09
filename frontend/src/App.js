import { PizzaContextProvider } from './components/PizzaContext';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import PizzaList from './components/PizzaList';

function App() {
 
  
  return (
    <Router>
      <PizzaContextProvider>
    
     <div className='home'>
    <header >
    <div className="logo">
    <span>p</span>
    <span>i</span>
    <span>z</span>
    <span>z</span>
    <span>a</span>
    <span></span>
    </div>
    <div className="title">
  Pizza lio
    </div>
  <nav className= "nav">
    <NavLink className='homenav'>

      <div >Home</div>
    </NavLink>
    <NavLink className="cart">

      <div>Cart</div>
    </NavLink>
    <NavLink className="aboutus">

      <div>About us</div>
    </NavLink>
  </nav>
  <div className="search">

  <form action="">
    <input list="pizza" name="pizza" />
    <datalist id="pizza">
    <option value=""></option>  {/* value={data? data[0].name :""} */}
    <option value="Diavola"></option>
    <option value="Margherita"></option>
    <option value="Prosciutto"></option>
    <option value="Wurstel"></option>
    </datalist>
  </form>
  </div>
  </header>
    <Routes>
    <Route path={"/"} element={< PizzaList />} />
    </Routes>
    </div> 
    
    </PizzaContextProvider>
    </Router>
  );
}

export default App;
