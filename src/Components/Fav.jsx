import React, { useContext } from 'react';
import { recipescontext } from '../Context/Recipecontext';

const Favorites = () => {
  const { favorites } = useContext(recipescontext);

  return (
    <div className="min-h-screen p-6 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Recipes</h1>
      
      {(favorites && favorites.length === 0) ? (
        <p className="text-gray-400">No favorites yet. Start adding some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites && favorites.map((recipe) => (
            <div key={recipe.id} className="p-4 border rounded-xl bg-gray-900">
              <img src={recipe.Image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-400 mb-2">{recipe.Chefname}</p>
              <p className="text-sm text-gray-400">{recipe.Preptime} • {recipe.Servings} servings</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
