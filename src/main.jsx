import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErroPage from './components/erropage/Erropage.jsx'
import Ingredients from './pages/Ingredients/Ingredients.jsx'
import Letter from './pages/Letter/Letter.jsx'
import {createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Recipes from './pages/Recipes/Recipes.jsx'
import Home from './pages/Home/Home.jsx'
import Meals from './pages/pagMeals/Meals.jsx';
import Mealdetails from './pages/Mealdetails/Mealdetails.jsx'
import { Provider } from 'react-redux';
import Store from './Redux/store.js';




const router =  createBrowserRouter ([{
  path: "/",
  element:<App/>,
  errorElement: <ErroPage/>,
  children:[
    {
      path: "Home",
      element:<Home/>,
      errorElement: <ErroPage/>,

    },
    {
      path: "by-Ingredients",
      element:<Ingredients/>,
      errorElement: <ErroPage/>,

    },
    {
      path: "by-Letter",
      element:<Letter/>,
      errorElement: <ErroPage/>,
    },
    {
      path: "by-name",
      element:<Recipes/>,
      errorElement: <ErroPage/>,
    },
    {
      path: "Meals",
      element:<Meals/>,
      rrorElement: <ErroPage/>,
    },{
      path: "MealsDetails",
      element:<Mealdetails/>,
      rrorElement: <ErroPage/>,
    }
  ]
}])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
