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
      const { data } = await axios.get("/recipes")
      setapiRecipes(data.recipes) // Changed from data.meals to data.recipes
      console.log(data.recipes) // Fixed console.log to match the data structure
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    apifetch()
  }, [])
  
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-7">
          {apiRecipes?.map((recipe) => {
            return ( // Added missing return statement
              <SingleCard
                key={recipe.id} // Changed from recipe.idMeal to recipe.id
                recipe={{
                  id: nanoid(), // Updated property mapping
                  Image: recipe.image, // Changed from recipe.strMealThumb to recipe.image
                  title: recipe.name, // Changed from recipe.strMeal to recipe.name
                  difficulty: recipe.difficulty, // Now uses actual difficulty from API
                  caloriesPerServing: recipe.caloriesPerServing,
                  cookTimeMinutes: recipe.cookTimeMinutes,
                  prepTimeMinutes: recipe.prepTimeMinutes,
                  cuisine: recipe.cuisine,
                  rating: recipe.rating,
                  reviewCount: recipe.reviewCount,
                  servings: recipe.servings,
                  ingredients: recipe.ingredients,
                  instructions: recipe.instructions,
                  mealType: recipe.mealType,
                  tags: recipe.tags
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Recipes