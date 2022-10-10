import React,{useState,useEffect,createContext} from "react"
import axios from "axios"

export const PizzaContext = createContext(null)

export const  PizzaContextProvider =({children})=>{
    const[data,setData]= useState([])
    const[amount,setAmount]=useState(0)
   

    useEffect(()=>{
        async function getData(){
        const apiData =   await axios.get("http://localhost:5000/pizza")
            setData(apiData.data)
        }
        getData()
    },[])
   
   

return(
   < PizzaContext.Provider value={{ data}}>
   {children}
   </PizzaContext.Provider>
)


}
