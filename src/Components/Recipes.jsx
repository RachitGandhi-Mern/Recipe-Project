import React, { useState } from 'react';
import { Clock, Users, ChefHat, Heart, Star, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [bookmarks, setBookmarks] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const toggleBookmark = (id) => {
    setBookmarks((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };
const navigate = useNavigate()
  const NavigateHandler = () => {
      navigate("/getrecipe")
  }

  const getDifficultyColor = (level) => {
    return {
      Easy: 'text-green-400 bg-green-400/10',
      Medium: 'text-yellow-400 bg-yellow-400/10',
      Hard: 'text-red-400 bg-red-400/10',
    }[level] || 'text-gray-400 bg-gray-400/10';
  };

  const recipes = [
    {
      id: 1,
      title: "Truffle Mushroom Risotto",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
      chef: "Marco Chen",
      time: "35 min",
      servings: 4,
      difficulty: "Medium",
      rating: 4.8,
      reviews: 324,
      tags: ["Italian", "Vegetarian", "Gourmet"],
      price: "$28",
    },
    {
      id: 2,
      title: "Seared Salmon Teriyaki",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      chef: "Yuki Tanaka",
      time: "20 min",
      servings: 2,
      difficulty: "Easy",
      rating: 4.9,
      reviews: 567,
      tags: ["Japanese", "Healthy", "Quick"],
      price: "$24",
    },
    {
      id: 3,
      title: "Chocolate Lava Cake",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
      chef: "Sophie Laurent",
      time: "45 min",
      servings: 6,
      difficulty: "Hard",
      rating: 4.7,
      reviews: 892,
      tags: ["Dessert", "French", "Indulgent"],
      price: "$18",
    },
    {
      id: 4,
      title: "Mediterranean Bowl",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      chef: "Elena Rodriguez",
      time: "15 min",
      servings: 2,
      difficulty: "Easy",
      rating: 4.6,
      reviews: 234,
      tags: ["Healthy", "Vegan", "Fresh"],
      price: "$16",
    },
    {
      id: 5,
      title: "BBQ Pulled Pork",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
      chef: "Jake Morrison",
      time: "4 hours",
      servings: 8,
      difficulty: "Medium",
      rating: 4.9,
      reviews: 445,
      tags: ["American", "BBQ", "Comfort"],
      price: "$32",
    },
    {
      id: 6,
      title: "Thai Green Curry",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
      chef: "Arisa Patel",
      time: "30 min",
      servings: 4,
      difficulty: "Medium",
      rating: 4.8,
      reviews: 678,
      tags: ["Thai", "Spicy", "Aromatic"],
      price: "$22",
    },
  ];

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
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((r) => (
            <div
              key={r.id}
              className="group relative rounded-2xl overflow-hidden border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50 hover:border-gray-700/90 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={() => toggleFavorite(r.id)}
                    className={`p-2 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
                      favorites.has(r.id)
                        ? 'bg-gray-800/50 border-gray-600 text-gray-300'
                        : 'bg-black/40 border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-600'
                    }`}
                    aria-label={favorites.has(r.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(r.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => toggleBookmark(r.id)}
                    className={`p-2 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
                      bookmarks.has(r.id)
                        ? 'bg-gray-800/50 border-gray-600 text-gray-300'
                        : 'bg-black/40 border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-600'
                    }`}
                    aria-label={bookmarks.has(r.id) ? "Remove bookmark" : "Add bookmark"}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarks.has(r.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Difficulty */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getDifficultyColor(r.difficulty)}`}>
                    {r.difficulty}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold border border-gray-800">
                    {r.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <ChefHat className="w-4 h-4 text-orange-400" />
                  {r.chef}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-200">
                  {r.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {r.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {r.servings} servings
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm mb-4">
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" /> <span className="text-white font-semibold">{r.rating}</span>
                  </span>
                  <span className="text-gray-500">({r.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {r.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-gray-900/80 text-gray-400 border border-gray-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button onClick={NavigateHandler} className="w-full py-3 px-6 font-semibold text-white rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/50 active:scale-[0.98]">
                  Get Recipe
                </button>
              </div>
            </div>
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