import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux' // currently unused, can be removed if not needed
import axios from '../Api/Recipesconfig'
import SingleCard from './SingleCard' // ✅ make sure the path is correct
import { nanoid } from 'nanoid/non-secure'
import { Receipt } from 'lucide-react'

const Recipes = () => {
  const [apiRecipes, setapiRecipes] = useState([]);

  const apifetch = async () => {
    try {
      const { data } = await axios.get("/filter.php?c=Pasta")
      setapiRecipes(data.meals)
      console.log(data.meals)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    apifetch()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
     {apiRecipes?.map((recipe)=>{
      <SingleCard key={recipe.idMeal}  recipe={{
        id: recipe.idMeal,
          Image: recipe.strMealThumb,
          title: recipe.strMeal,
          difficulty: "Easy"
      }}/>
     })}
    </div>
  )
}

export default Recipes