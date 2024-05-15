import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './index.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Recipe } from './types';

export function AppRouter() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  // return createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout recipes={recipes} setRecipes={setRecipes} />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home recipes={recipes} />
  //       },
  //       {
  //         path: '/favorites',
  //         element: <Favorites />
  //       }
  //     ],
  //   },
  //   {

  //   }
  // ])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout recipes={recipes} setRecipes={setRecipes} />}>
          <Route path='/' index element={<Home recipes={recipes} />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
