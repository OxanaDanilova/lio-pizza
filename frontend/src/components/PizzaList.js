import React, { useContext,useState } from "react";
import { PizzaContext } from "./PizzaContext"
import "./PizzaList.css"


function PizzaList() {
  
  const pizzaContext = useContext(PizzaContext);
  const data = pizzaContext.data
  const [cart,setCart]=useState([])
  const [orderNum,setOrderNum]=useState(0)

  function cartHandler (e){
    
   const favFilter = data.filter((el)=> el._id === e.target.value )
   const favObject = favFilter[0]
 
   setCart([...cart,favObject])
   setOrderNum(cart.length +1)
  }
console.log("fav",cart)




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
  <input list="pizza" name="pizza" />
  <datalist id="pizza">
  <option value="Capricciosa"></option>  {/* value={data? data[0].name :""} */}
  <option value="Diavola"></option>
  <option value="Margherita"></option>
  <option value="Prosciutto"></option>
  <option value="Wurstel"></option>
  </datalist>
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