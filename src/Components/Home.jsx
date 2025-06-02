import React, { useState, useEffect } from 'react';
import { ChefHat, BookOpen, Plus, Search, TrendingUp, Clock, Users, Star, Heart } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Plus,
      title: "Create Recipe",
      description: "Add your favorite recipes with detailed instructions and ingredients",
      path: "/Create"
    },
    {
      icon: BookOpen,
      title: "My Recipes",
      description: "Browse and manage your personal collection of recipes",
      path: "/Favourites"
    },
    {
      icon: Search,
      title: "Discover",
      description: "Find new recipes and get inspired for your next meal",
      path: "/Recipes"
    }
  ];
    const navigate = useNavigate();
    
  const stats = [
    { label: "Recipes Created", value: "1,234", icon: BookOpen },
    { label: "Active Users", value: "5.6K", icon: Users },
    { label: "Avg Rating", value: "4.8", icon: Star },
    { label: "Cook Time Saved", value: "2.3K hrs", icon: Clock }
  ];

  const recentRecipes = [
    { name: "Creamy Mushroom Risotto", time: "35 min", difficulty: "Medium", rating: "4.8", reviews: "124", chef: "Chef Mario", image: "🍄" },
    { name: "Chocolate Lava Cake", time: "25 min", difficulty: "Easy", rating: "4.9", reviews: "89", chef: "Chef Sarah", image: "🍰" },
    { name: "Grilled Salmon Teriyaki", time: "20 min", difficulty: "Easy", rating: "4.7", reviews: "156", chef: "Chef Yuki", image: "🐟" }
  ];

  const getDifficultyColor = (level) => {
    return {
      Easy: 'text-green-400 bg-green-400/10',
      Medium: 'text-yellow-400 bg-yellow-400/10',
      Hard: 'text-red-400 bg-red-400/10',
    }[level] || 'text-gray-400 bg-gray-400/10';
  };

  const cooking = useNavigate()
  const startcooking = ()=>{
   cooking("/Recipes")
  }

  return (
    <div className="min-h-screen bg-black text-white pt-15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className={`px-6 py-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-2 bg-gray-900 border border-gray-800 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <ChefHat className="h-8 w-8 text-orange-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Recipe Booklet
                </h1>
                <p className="text-sm text-gray-500">Your culinary companion</p>
              </div>
            </div>
            
            
            <button className="py-3 px-6 font-semibold text-white rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]">
              Get Started
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className={`px-6 py-16 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">
                Premium Recipe Collection
              </h2>
              <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover extraordinary recipes crafted by world-class chefs. Each dish tells a story of flavor, tradition, and culinary excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button onClick={startcooking} className="py-4 px-8 font-semibold text-white rounded-xl border border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-[1.02] group">
                <span className="flex items-center justify-center">
                  Start Cooking
                  <ChefHat className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              <button className="py-4 px-8 font-semibold text-gray-400 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-gray-800 hover:border-gray-700 hover:text-white transition-all duration-300 hover:scale-[1.02]">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/70 hover:border-gray-700/90 transition-all duration-500 hover:scale-[1.02] hover:bg-gray-800/80 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-orange-400 mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`px-6 py-16 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white tracking-tight">
              Everything You Need
            </h3>
            <p className="text-xl text-gray-500">Powerful features to elevate your cooking experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
              onClick={() => navigate(feature.path)}
                key={index}
                className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] ${hoveredCard === index ? 'z-10' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/70 hover:border-gray-700/90 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-gray-900/50">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="h-8 w-8 text-orange-400" />
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-gray-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 group-hover:text-gray-300">
                      Learn More
                      <TrendingUp className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Recipes */}
        <section className={`px-6 py-16 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-white tracking-tight">
              Popular Recipes
            </h3>
            <p className="text-xl text-gray-500">Discover what's trending in the kitchen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentRecipes.map((recipe, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50 hover:border-gray-700/90 transition-all duration-500 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-700 overflow-hidden">
                    {recipe.image}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button className="p-2 rounded-full border backdrop-blur-sm transition-all duration-200 hover:scale-110 bg-black/40 border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-600">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Difficulty */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getDifficultyColor(recipe.difficulty)}`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <ChefHat className="w-4 h-4 text-orange-400" />
                    {recipe.chef}
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors duration-200">
                    {recipe.name}
                  </h4>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {recipe.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm mb-6">
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" /> <span className="text-white font-semibold">{recipe.rating}</span>
                    </span>
                    <span className="text-gray-500">({recipe.reviews} reviews)</span>
                  </div>

                  <button className="w-full py-3 px-6 font-semibold text-white rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/50 active:scale-[0.98]">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center px-6 pb-16">
          <button className="py-4 px-8 font-semibold text-white rounded-xl border border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300">
            Load More Recipes
          </button>
        </div>

        {/* Footer */}
        <footer className={`px-6 py-12 border-t border-gray-800 transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-2 bg-gray-900 border border-gray-800 rounded-xl">
                <ChefHat className="h-6 w-6 text-orange-400" />
              </div>
              <span className="text-xl font-bold text-white">
                Recipe Booklet
              </span>
            </div>
            
            <p className="text-gray-500 mb-8">
              Making cooking accessible, enjoyable, and memorable for everyone.
            </p>
            
            <div className="text-sm text-gray-600">
              © 2025 Recipe Booklet. Made with ❤️ for food lovers everywhere.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;