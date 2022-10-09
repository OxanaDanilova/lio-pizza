import React, { useContext,useState } from "react";
import { PizzaContext } from "./PizzaContext"
import "./PizzaList.css"


function PizzaList() {
  
  const pizzaContext = useContext(PizzaContext);
 
  return (
    <main>
      <section >
        {pizzaContext.data.map((card)=>{
          return(
            <div className="card" key={card._id}>
              <div className="card-img">
              <img src={card.img} alt="Foto not avalible" />
              </div >
              <div className="card-name">{card.name}</div>
              <div className="card-info">{card.info}</div>
            </div>
          )
        })}
      </section>
      <div className='sidebar'>
        <div className="sidebar-title">Pizza Lio</div>
        <div className="addres"> Antunisstr.44 65781 Kön</div>
        <div className="tel">034 767 989 890</div>
       
      </div>
    </main>

  )
}

export default PizzaList