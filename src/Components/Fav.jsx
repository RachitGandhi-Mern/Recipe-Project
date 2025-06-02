import React, { useContext } from 'react';
import { recipescontext } from '../Context/Recipecontext';
import SingleCard from './SingleCard';

const Favorites = () => {
  const { favorites } = useContext(recipescontext);
  console.log(favorites)
  
  return (
    <div className="min-h-screen w-full p-4 sm:p-6 lg:p-8 bg-black text-white pt-20 sm:pt-25 ">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left pt-15">
        Your Favorite Recipes
      </h1>
      {(favorites && favorites.length === 0) ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <p className="text-gray-400 text-center text-lg sm:text-xl">
            No favorites yet. Start adding some!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
          {favorites && favorites.map((recipe) => (
            <SingleCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;