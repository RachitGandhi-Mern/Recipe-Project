import { createContext, useState } from 'react';

export const recipescontext = createContext();

export const Recipecontext = ({ children }) => {
  const [data, setdata] = useState([]);
   const [favorites, setFavorites] = useState([]);

  return (
    <recipescontext.Provider value={{ data, setdata,favorites, setFavorites }}>
      {children}
    </recipescontext.Provider>
  );
};