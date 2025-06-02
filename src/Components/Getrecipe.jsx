import React, { useContext, useState } from 'react';
import {
  Clock,
  Users,
  ChefHat,
  Heart,
  Star,
  Bookmark,
  ArrowLeft,
  Flame
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { recipescontext } from '../Context/Recipecontext';


const GetRecipe = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [bookmarks, setBookmarks] = useState(new Set());
  const [activeTab, setActiveTab] = useState('ingredients');

  const { data } = useContext(recipescontext);
  const navigate = useNavigate();

  const recipe = data && data.length > 0 ? data[0] : {
    id: 1,
    title: "Truffle Risotto Supreme",
    Image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop",
    Chefname: "Marco Benedetti",
    difficulty: "Hard",
    price: "$45",
    Preptime: "45 mins",
    Servings: 4,
    rating: 4.8,
    reviews: 127,
    tags: ["Italian", "Vegetarian", "Luxury", "Creamy", "Truffle"]
  };

  const toggleFavorite = () => {
    setFavorites((prev) => {
      const updated = new Set(prev);
      updated.has(recipe.id) ? updated.delete(recipe.id) : updated.add(recipe.id);
      return updated;
    });
  };

  const toggleBookmark = () => {
    setBookmarks((prev) => {
      const updated = new Set(prev);
      updated.has(recipe.id) ? updated.delete(recipe.id) : updated.add(recipe.id);
      return updated;
    });
  };

  const getDifficultyColor = (level) => {
    return {
      Easy: 'text-green-400 bg-green-400/10 border-green-400/20',
      Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
      Hard: 'text-red-400 bg-red-400/10 border-red-400/20',
    }[level] || 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  };

  const mockIngredients = [
    { item: "2 cups all-purpose flour", category: "Dry Ingredients" },
    { item: "1 tsp baking powder", category: "Dry Ingredients" },
    { item: "1/2 tsp salt", category: "Dry Ingredients" },
    { item: "3 large eggs", category: "Wet Ingredients" },
    { item: "1 cup milk", category: "Wet Ingredients" },
    { item: "2 tbsp olive oil", category: "Wet Ingredients" },
    { item: "1 onion, diced", category: "Fresh Ingredients" },
    { item: "2 cloves garlic, minced", category: "Fresh Ingredients" }
  ];

  const mockInstructions = [
    "Preheat your oven to 375°F (190°C) and prepare your cooking area.",
    "In a large bowl, whisk together flour, baking powder, and salt until well combined.",
    "In another bowl, beat eggs and gradually add milk and olive oil, mixing until smooth.",
    "Combine wet and dry ingredients, stirring until just incorporated. Don't overmix.",
    "Heat a large skillet over medium heat and sauté onions until translucent.",
    "Add garlic and cook for another minute until fragrant.",
    "Pour the batter into your prepared dish and bake for 25-30 minutes.",
    "Check for doneness with a toothpick - it should come out clean when ready.",
    "Let cool for 5 minutes before serving. Garnish as desired."
  ];

  return (
    <div className="min-h-screen bg-black p-6 pt-18">
      <div className="relative h-96 overflow-hidden">
        <img
          src={recipe.Image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 p-3 rounded-full bg-black/40 border border-gray-700 text-white backdrop-blur-sm hover:bg-black/60 hover:scale-110 transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="absolute top-6 right-6 flex gap-3">
          <button
            onClick={() => toggleFavorite(recipe)}
            className={`p-3 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
              favorites.has(recipe.id)
                ? 'bg-red-500/20 border-red-500/50 text-red-400'
                : 'bg-black/40 border-gray-700 text-gray-400 hover:text-red-400 hover:border-red-500/50'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorites.has(recipe.id) ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={toggleBookmark}
            className={`p-3 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
              bookmarks.has(recipe.id)
                ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                : 'bg-black/40 border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-500/50'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${bookmarks.has(recipe.id) ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </span>
              <span className="bg-gray-900/80 text-white px-4 py-2 rounded-full text-sm font-semibold border border-gray-700">
                {recipe.price}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {recipe.title}
            </h1>
            <div className="flex items-center gap-3 text-gray-300 mb-6">
              <ChefHat className="w-5 h-5 text-orange-400" />
              <span className="text-lg">Chef {recipe.Chefname}</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">{recipe.Preptime}</span>
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="font-semibold">{recipe.Servings} servings</span>
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{recipe.rating}</span>
                <span className="text-gray-500">({recipe.reviews} reviews)</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="flex gap-1 mb-8 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
          {['ingredients', 'instructions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'ingredients' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Ingredients</h2>
            {Object.entries(
              mockIngredients.reduce((acc, ingredient) => {
                if (!acc[ingredient.category]) acc[ingredient.category] = [];
                acc[ingredient.category].push(ingredient.item);
                return acc;
              }, {})
            ).map(([category, items]) => (
              <div key={category} className="bg-gray-900/80 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" />
                  {category}
                </h3>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-gray-600 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'instructions' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Instructions</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-300">
              {mockInstructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetRecipe;