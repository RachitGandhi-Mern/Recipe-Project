import React, { useContext, useState } from 'react';
import { Clock, Users, ChefHat, Heart, Star, Bookmark } from 'lucide-react';
import { recipescontext } from '../Context/Recipecontext';
import { useNavigate } from 'react-router-dom';



const SingleCard = ({recipe}) => {
  const [bookmarks, setBookmarks] = useState(new Set());
    const { data,} = useContext(recipescontext);
  const {  favorites, setFavorites } = useContext(recipescontext);
  

   const toggleBookmark = (id) => {
    setBookmarks((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const navigate = useNavigate();
  const NavigateHandler = (recipeId) => {
    navigate("/getrecipe", { state: { recipeId } });
  };


  const getDifficultyColor = (level) => {
    return {
      Easy: 'text-green-400 bg-green-700/70',
      Medium: 'text-yellow-400 bg-yellow-700/70',
      Hard: 'text-red-800 bg-red-700/60',
    }[level] || 'text-gray-400 bg-gray-400/10';
  };
  

  const toggleFavorite = (recipe) => {
  setFavorites((pre)=>pre.find ((r)=> r.id == recipe.id)
?pre.filter((r)=> r.id !== recipe.id):
[...pre , data.find((r)=> r.id === recipe.id)])
};

  
  return (
    <div
              key={recipe.id}
              className="group relative rounded-2xl overflow-hidden border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50 hover:border-gray-700/90 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={recipe.Image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={() => toggleFavorite(recipe)}
                    className={`p-2 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
                      favorites.some(fav => fav.id === recipe.id)
                        ? 'bg-gray-800/50 border-gray-600 text-gray-300'
                        : 'bg-black/40 border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-600'
                    }`}
                    aria-label={favorites.some(fav => fav.id === recipe.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${favorites.some(fav => fav.id === recipe.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => toggleBookmark(recipe.id)}
                    className={`p-2 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
                      bookmarks.has(recipe.id)
                        ? 'bg-gray-800/50 border-gray-600 text-gray-300'
                        : 'bg-black/40 border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-600'
                    }`}
                    aria-label={bookmarks.has(recipe.id) ? "Remove bookmark" : "Add bookmark"}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarks.has(recipe.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Difficulty */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold border border-gray-800">
                    {recipe.Price} <span className=' text-orange-400'>Rs</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <ChefHat className="w-4 h-4 text-orange-400" />
                  {recipe.Chefname}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-200">
                  {recipe.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {recipe.Preptime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {recipe.Servings} servings
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" /> <span className="text-white font-semibold">{recipe.rating}</span>
                  </span>
                  <span className="text-gray-500">({recipe.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {recipe.tags && recipe.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-gray-900/80 text-gray-400 border border-gray-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => NavigateHandler(recipe.id)} 
                  className="w-full py-3 px-6 font-semibold text-white rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/50 active:scale-[0.98]"
                >
                  Get Recipe
                </button>
              </div>
            </div>
  )
}

export default SingleCard
