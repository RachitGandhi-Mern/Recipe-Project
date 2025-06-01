// import React, { useContext, useState } from 'react';
// import { Clock, Users, ChefHat, Heart, Star, Bookmark } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { recipescontext } from '../Context/Recipecontext';
import SingleCard from '../Components/SingleCard';
import { useContext } from 'react';
import { recipescontext } from '../Context/Recipecontext';



const Recipes = () => {
  
    const { data,} = useContext(recipescontext);
  
  
  return (
    <div className="min-h-screen bg-black p-6 pt-25">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Premium Recipe Collection
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Discover extraordinary recipes crafted by world-class chefs. Each dish tells a story of flavor, tradition, and culinary excellence.
          </p>
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.map((recipe) => (
            <SingleCard recipe={recipe} key={recipe.id}/>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="py-4 px-8 font-semibold text-white rounded-xl border border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300">
            Load More Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
