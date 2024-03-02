import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/components/Home.jsx';
import Root from './routes/Root.jsx';
import Cart from './pages/Cart/components/Cart.jsx';
import Products from './pages/Products/components/Products.jsx';
import Categories from './pages/categories/components/Categories.jsx';



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/> ,
      children:[
        {
          path: "/",
          element:<Home/> ,
        },
        {
          path: "/categories",
          element:<Categories/> ,
        },
        {
          path: "/cart",
          element:<Cart/> ,
        },
        {
          path: "/products",
          element:<Products/> ,
        }, 
      ]
    },
  ]);
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}
