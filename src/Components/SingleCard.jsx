import React, { useContext, useState } from 'react';
import { Heart, Bookmark } from 'lucide-react';
import { RecipesContext } from '../Context/Recipecontext';
import { useNavigate } from 'react-router-dom';

const SingleCard = ({ recipe }) => {
  const [bookmarks, setBookmarks] = useState(new Set());
  const { data, favorites, setFavorites } = useContext(RecipesContext);
  const navigate = useNavigate();

  const toggleBookmark = (id) => {
    setBookmarks((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const NavigateHandler = (recipe) => {
    navigate("/getrecipe", { state: { recipe } });
  };

  const getDifficultyColor = (level) => {
    return {
      Easy: 'text-green-400 bg-green-700/70',
      Medium: 'text-yellow-400 bg-yellow-700/70',
      Hard: 'text-red-800 bg-red-700/60',
    }[level] || 'text-gray-400 bg-gray-400/10';
  };

  const toggleFavorite = (recipe) => {
    setFavorites((prev) =>
      prev.find((r) => r.id === recipe.id)
        ? prev.filter((r) => r.id !== recipe.id)
        : [...prev, recipe] // Simplified - just add the recipe directly
    );
  };

  // Check if recipe is favorited
  const isFavorited = favorites.some((fav) => fav.id === recipe.id);
  
  // Check if recipe is bookmarked
  const isBookmarked = bookmarks.has(recipe.id);

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50 hover:border-gray-700/90 transition-all duration-500">
      <div className="relative">
        <img
          src={recipe.Image}
          alt={recipe.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => toggleFavorite(recipe)}
            className={`p-2 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
              isFavorited
                ? 'bg-red-500/70 border-red-400 text-red-100' // More visible when favorited
                : 'bg-black/40 border-gray-700 text-gray-500 hover:text-red-400 hover:border-red-600'
            }`}
            aria-label="Toggle Favorite"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => toggleBookmark(recipe.id)}
            className={`p-2 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
              isBookmarked
                ? 'bg-blue-500/70 border-blue-400 text-blue-100' // More visible when bookmarked
                : 'bg-black/40 border-gray-700 text-gray-500 hover:text-blue-400 hover:border-blue-600'
            }`}
            aria-label="Toggle Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-white truncate">{recipe.title}</h3>
        <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
          {recipe.difficulty}
        </div>
        <button
          onClick={() => NavigateHandler(recipe)}
          className="block mt-3 w-full text-center text-sm font-semibold text-blue-400 hover:underline"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default SingleCard;