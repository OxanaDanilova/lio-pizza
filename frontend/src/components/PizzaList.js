import React, { useContext } from "react";
import { PizzaContext } from "./PizzaContext"
import "./PizzaList.css"


function Home() {
  
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
              <div className="order">

              <button className="minus">-</button>
              <div className="amount">0</div>
              <button className="plus">+</button>
              </div>
            </div>
          )
        })}
      </section>
      <div className='sidebar'>
        
      </div>
    </main>

  )
}

export default Home