import React, { useState,useEffect } from "react";
import "./PizzaList.css"
import axios from "axios"


function PizzaList() {
  const[data,setData]= useState([])
  const [cart,setCart]=useState([])
  const [orderNum,setOrderNum]=useState(0)

  useEffect(()=>{
    async function getData(){
    const apiData =   await axios.get("http://localhost:5000/pizza")
        setData(apiData.data)
    }
    getData()
},[])

  function cartHandler (e){
    
   const cartFilter = data.filter((el)=> el._id === e.target.value )
   const cartObject = cartFilter[0]
   setCart([...cart,cartObject])
   setOrderNum(cart.length +1)
   
  }

  function searchHandler (e){
         const filteredData = data.filter((el)=>el.name === e.target.value)
      setData(filteredData)
      console.log(e.target.value)
  }


  return (
   
    <main>
      <section >
        {data.map((card)=>{
          return(
            <div className="card" key={card._id}>
              <div className="card-img">
              <img src={card.img} alt="Foto not avalible" />
              </div >
              <div className="card-name">{card.name}</div>
              <div className="card-info">{card.info}</div>
              <button className="cart-btn" value={card._id} onClick={cartHandler}>Add to Cart</button>
            </div>
          )
        })}
      </section>
      <div className='sidebar'>
      <div className="search">

<form action="">
  <label htmlFor="search"></label>
  <select className="select" id="search" onChange={searchHandler}>
  <option value="Capricciosa">Capricciosa</option>  {/* value={data? data[0].name :""} */}
  <option value="Diavola">Diavola</option>
  <option value="Margherita">Margherita</option>
  <option value="Prosciutto">Prosciutto</option>
  <option value="Wurstel">Wurstel</option>
  </select>

</form>
</div>
        <div className="sidebar-title">Pizza Lio </div>
        <div className="sidebar-pizza-logo"></div>
        <div className="address"> Antunisstr.44 65781 Köln</div>
        <div className="tel">034 767 989 890</div>
        <div className="cart-fa" data-icon={orderNum}><i class="fa-solid fa-cart-shopping"></i></div>
        
       
      </div>
    </main>

  )
}

export default PizzaList