import React, { useContext, useState } from 'react';
import { Plus, X, Clock, Users, ChefHat, Camera, Save, Star, Receipt } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { RecipesContext } from '../Context/Recipecontext';


const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([{ id: 1, value: '' }]);
  const [instructions, setInstructions] = useState([{ id: 1, value: '' }]);
  const [tags, setTags] = useState(['vegetarian', 'quick']);
  const [currentTag, setCurrentTag] = useState('');
  
  const {data , setdata} = useContext(RecipesContext)

  const { register, handleSubmit,reset, formState: { errors } } = useForm()

  const addIngredient = () => {
    setIngredients([...ingredients, { id: nanoid(), value: '' }]);
  };

  const removeIngredient = (id) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(item => item.id !== id));
    }
  };

  const updateIngredient = (id, value) => {
    setIngredients(ingredients.map(item => 
      item.id === id ? { ...item, value } : item
    ));
  };

  const addInstruction = () => {
    setInstructions([...instructions, { id: Date.now(), value: '' }]);
  };

  const removeInstruction = (id) => {
    if (instructions.length > 1) {
      setInstructions(instructions.filter(item => item.id !== id));
    }
  };

  const updateInstruction = (id, value) => {
    setInstructions(instructions.map(item => 
      item.id === id ? { ...item, value } : item
    ));
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const categories = [
    'Italian', 'Japanese', 'French', 'American', 'Thai', 'Mediterranean', 
    'Indian', 'Mexican', 'Chinese', 'Dessert', 'Appetizer', 'Main Course'
  ];



  const SubmitHandler = (recipe) => {
    // Add ingredients and instructions to form data
    recipe.ingredients = ingredients.filter(i => i.value.trim()).map(i => i.value);
    recipe.instructions = instructions.filter(i => i.value.trim()).map(i => i.value);
    recipe.tags = tags;
    recipe.id = nanoid()
    console.log(recipe)
    // const copydata =[...data]
    // copydata.push(recipe)
    // setdata(copydata)
    setdata([...data , recipe])
    console.log(recipe)
    reset()
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)} 
    className="min-h-screen bg-black pt-25 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Create New Recipe
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Share your culinary masterpiece with the world. Create detailed recipes that inspire and delight food enthusiasts everywhere.
          </p>
        </div>

        <div className="space-y-8">
          {/* Basic Information Card */}
          <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700/90 transition-all duration-500">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <ChefHat className="w-6 h-6 text-orange-400" />
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="img" className="block text-gray-400 font-medium mb-2">
                    Recipe Image <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("Image", { required: "Image URL is required" })}
                    type="url"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                    placeholder="Enter Recipe Image Url..."
                  />
                  {errors.Image && <p className="text-red-400 text-sm mt-1">{errors.Image.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-400 font-medium mb-2">
                    Recipe Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("title", { required: "Recipe title is required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                    placeholder="Enter your recipe title..."
                  />
                  {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-400 font-medium mb-2">
                    Chef Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("Chefname", { required: "Chef name is required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                    placeholder="Your name..."
                  />
                  {errors.Chefname && <p className="text-red-400 text-sm mt-1">{errors.Chefname.message}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-400 font-medium mb-2">Description</label>
                  <textarea
                    {...register("Description")}
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 resize-none focus:outline-none"
                    placeholder="Describe your recipe..."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">0/500</div>
                </div>

                <div>
                  <label className="block text-gray-400 font-medium mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Servings <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("Servings", { required: "Servings required" })}
                    type="number"
                    min="1"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                    placeholder="4"
                  />
                  {errors.Servings && <p className="text-red-400 text-sm mt-1">{errors.Servings.message}</p>}
                </div>

                <div>
                  <label className=" text-gray-400 font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Prep Time <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("Preptime", { required: "Prep time required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                    placeholder="15 min"
                  />
                  {errors.Preptime && <p className="text-red-400 text-sm mt-1">{errors.Preptime.message}</p>}
                </div>




                <div>
                  <label className="block text-gray-400 font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Price <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("Price", { required: "Price required" })}
                    type="Number"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                    placeholder="20"
                  />
                  {errors.Price && <p className="text-red-400 text-sm mt-1">{errors.Price.message}</p>}
                </div>













                <div>
                  <label className="block text-gray-400 font-medium mb-2">
                    Cook Time <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("Cooktime", { required: "Cook time required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                    placeholder="30 min"
                  />
                  {errors.Cooktime && <p className="text-red-400 text-sm mt-1">{errors.Cooktime.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-400 font-medium mb-2">
                    Difficulty <span className="text-red-400">*</span>
                  </label>
                  <select
                    {...register("difficulty", { required: "Difficulty required" })}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none">
                    <option value="" className="bg-gray-900">Select difficulty</option>
                    <option value="Easy" className="bg-gray-900">Easy</option>
                    <option value="Medium" className="bg-gray-900">Medium</option>
                    <option value="Hard" className="bg-gray-900">Hard</option>
                  </select>
                  {errors.difficulty && <p className="text-red-400 text-sm mt-1">{errors.difficulty.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-400 font-medium mb-2">
                    Category <span className="text-red-400">*</span>
                  </label>
                  <select 
                    {...register("category", { required: "Category required" })}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none">
                    <option value="" className="bg-gray-900">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-gray-900">{cat}</option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category.message}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients Card */}
          <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700/90 transition-all duration-500">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  Ingredients
                  <span className="text-sm text-gray-500 font-normal">
                    ({ingredients.filter(i => i.value.trim()).length} added)
                  </span>
                </h2>
                <button
                  type="button"
                  onClick={addIngredient}
                  className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                  <Plus className="w-4 h-4" />
                  Add Ingredient
                </button>
              </div>
              
              <div className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <div key={ingredient.id} className="flex gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={ingredient.value}
                        onChange={(e) => updateIngredient(ingredient.id, e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                        placeholder={`Ingredient ${index + 1} (e.g., 2 cups flour)`}
                      />
                    </div>
                    {ingredients.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeIngredient(ingredient.id)}
                        className="px-3 py-3 bg-red-900/20 hover:bg-red-900/40 text-red-400 hover:text-red-300 border border-red-800/50 hover:border-red-700/50 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instructions Card */}
          <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700/90 transition-all duration-500">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                  Instructions
                  <span className="text-sm text-gray-500 font-normal">
                    ({instructions.filter(i => i.value.trim()).length} steps)
                  </span>
                </h2>
                <button
                  type="button"
                  onClick={addInstruction}
                  className="flex items-center gap-2 px-4 py-2 font-semibold text-white rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Plus className="w-4 h-4" />
                  Add Step
                </button>
              </div>
              
              <div className="space-y-4">
                {instructions.map((instruction, index) => (
                  <div key={instruction.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <textarea
                        rows="2"
                        value={instruction.value}
                        onChange={(e) => updateInstruction(instruction.id, e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 resize-none focus:outline-none"
                        placeholder={`Step ${index + 1}: Describe what to do...`}
                      />
                    </div>
                    {instructions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeInstruction(instruction.id)}
                        className="px-3 py-3 bg-red-900/20 hover:bg-red-900/40 text-red-400 hover:text-red-300 border border-red-800/50 hover:border-red-700/50 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 self-start"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tags Card */}
          <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700/90 transition-all duration-500">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Camera className="w-6 h-6 text-purple-400" />
                Tags
                <span className="text-sm text-gray-500 font-normal">
                  ({tags.length} added)
                </span>
              </h2>
              
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-4 py-3 bg-gray-900/80 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all duration-200 hover:border-gray-700/70 focus:outline-none"
                  placeholder="Add a tag (e.g., vegetarian, spicy, quick) - Press Enter"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-6 py-3 font-semibold text-white rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Add
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-md bg-gray-900/80 text-gray-300 border border-gray-800/50 hover:bg-gray-800/80 hover:border-gray-700/50 transition-all duration-200"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-red-400 transition-colors duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white rounded-xl border border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/50 active:scale-[0.98]"
            >
              <Save className="w-5 h-5" />
              Create Recipe
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateRecipe;