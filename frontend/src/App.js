
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
    <div className="title" >
  Pizza lio
    </div>
    <div className='pizza-letter'></div>
  <nav className= "nav">
    <NavLink className='nav-link home-nav'>

      <div >Home</div>
    </NavLink>
    <NavLink className="nav-link cart">

      <div>Cart</div>
    </NavLink>
    <NavLink className="nav-link about-us">
     <div>About us</div>
    </NavLink>
    </nav>
 
  </header>
    <Routes>
    <Route path={"/"} element={< PizzaList />} />
    </Routes>
    </div> 
    
   
    </Router>
  );
}

export default App;
