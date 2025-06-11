// Context/Recipecontext.js
import { createContext, useState } from 'react';

export const RecipesContext = createContext();

export const RecipeContext = ({ children }) => {
  const [data, setdata] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <RecipesContext.Provider value={{ data, setdata, favorites, setFavorites }}>
      {children}
    </RecipesContext.Provider>
  );
};