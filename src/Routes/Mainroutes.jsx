import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Recipes from '../Components/Recipes'
import Create from '../Components/CreateRecipe'
import Fav from '../Components/Fav';
import Getrecipe from '../Components/Getrecipe'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Create" element={<Create />} />
      <Route path='/getrecipe' element={<Getrecipe/>} />
      <Route path='/Favourites' element={<Fav/>}/>
    </Routes>
  )
}

export default Mainroutes