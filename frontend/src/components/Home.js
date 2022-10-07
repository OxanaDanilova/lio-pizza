import React,{useEffect,useState} from 'react'
import "./Home.css"
import axios from "axios"

function Home() {
    const[data,setData]= useState([])

    useEffect(()=>{
        async function getData(){
        const apiData =   await axios.get("http://localhost:5000/pizza")
            setData(apiData)
        }
        getData()
    },[])
    console.log(data.data)
  return (
    <div className='home'>
      <div>Haaaalo</div>
      <div className='header'></div>
      <div className='main'></div>
      <div className='sidebar'></div>
    </div>

  )
}

export default Home