import React, { useContext } from 'react';
import { recipescontext } from '../Context/Recipecontext';
import SingleCard from './SingleCard';

const Favorites = () => {
  const { favorites } = useContext(recipescontext);
  console.log(favorites)
  return (

    <div className="min-h-screen p-6 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Recipes</h1>
      
      {(favorites && favorites.length === 0) ? (
        <p className="text-gray-400">No favorites yet. Start adding some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites && favorites.map((recipe) => (
            <SingleCard recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
