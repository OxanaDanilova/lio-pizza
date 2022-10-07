import React,{useEffect,useState} from 'react'
import axios from "axios"
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  
  const[data,setData]= useState([])

  useEffect(()=>{
      async function getData(){
      const apiData =   await axios.get("http://localhost:5000/pizza")
          setData(apiData)
      }
      getData()
  },[])
 
  return (
    <Router>
    <div className="App">
    <Routes>

    <Route path={"/"} element={<Home data={data}/>} />

    </Routes>
      
    </div>
    </Router>
  );
}

export default App;
