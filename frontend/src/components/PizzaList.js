import React, { useContext,useState } from "react";
import { PizzaContext } from "./PizzaContext"
import "./PizzaList.css"


function PizzaList() {
  
  const pizzaContext = useContext(PizzaContext);
  const data = pizzaContext.data
  const [favorite,setFavorite]=useState([])

  function favoriteHandler (e){
    setFavorite(data.map((item)=>{
      if(item._id === e.target.value){
        return {
          ...favorite,
          name:item.name,
        }
      }
      return item
    }))
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
              <button className="favorite" value={card._id} onClick={favoriteHandler}>Add to favorite</button>
            </div>
          )
        })}
      </section>
      <div className='sidebar'>
        <div className="sidebar-title">Pizza Lio </div>
        <div className="sidebar-pizza-logo"></div>
        <div className="address"> Antunisstr.44 65781 Köln</div>
        <div className="tel">034 767 989 890</div>
       
      </div>
    </main>

  )
}

export default PizzaList