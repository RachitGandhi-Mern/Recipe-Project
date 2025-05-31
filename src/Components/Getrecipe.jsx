import React from 'react'
import { useNavigate } from 'react-router-dom'

const Getrecipe = () => {
    const Navigate = useNavigate()
  return (
    <div className="bg-black text-white h-screen w-screen flex justify-center items-center">
      <h1>GetRecipe</h1>
      <button onClick={()=>Navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Getrecipe
