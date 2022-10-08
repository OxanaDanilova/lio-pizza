import React,{useEffect,useState} from 'react'
import axios from "axios"
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main';

function App() {
  
  const[data,setData]= useState([])

  useEffect(()=>{
      async function getData(){
      const apiData =   await axios.get("http://localhost:5000/pizza")
          setData(apiData.data)
      }
      getData()
  },[])
 
  return (
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
      <div>Home</div>
      <div>Cart</div>
      <div>About us</div>
  </nav>
  <div className="search">

  <form action="">
    <input list="pizza" name="pizza" />
    <datalist id="pizza">
    <option value="Capricciosa"></option>
    <option value="Diavola"></option>
    <option value="Margherita"></option>
    <option value="Prosciutto"></option>
    <option value="Wurstel"></option>
    </datalist>
  </form>
  </div>
  </header>
    <Router>
    <div className="App">
    <Routes>

    <Route path={"/"} element={<Main data={data}/>} />

    </Routes>
      
    </div>
    </Router>
    </div>
  );
}

export default App;
