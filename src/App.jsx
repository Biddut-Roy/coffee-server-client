import { useLoaderData } from "react-router-dom"
import CardCoffee from "./CardCoffee";
import { useState } from "react";


function App() {

  const Coffees = useLoaderData();
  const [ allCoffees , setAllCoffees ] = useState(Coffees)
 

  return (
    <div className=" text-center mx-auto w-10/12">
      
      <h1>Coffee Store : {allCoffees.length}</h1>

      <div className=" grid grid-cols-2 gap-10 border-solid border-2">
      {allCoffees.map((coffee) => (
        <CardCoffee coffee={coffee} allCoffees={allCoffees} setAllCoffees={setAllCoffees} key={coffee._id} />
      ))}
      </div>
      
    </div>
  )
}

export default App
