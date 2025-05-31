import React, { createContext, useState } from 'react'

export const recipescontext = createContext(null)

const RecipeContext = (props) => {
  const [data, setData] = useState([])
  
  console.log(data)
  
  return (
    <recipescontext.Provider value={{ data, setData }}>
      {props.children}
    </recipescontext.Provider>
  )
}

export default RecipeContext