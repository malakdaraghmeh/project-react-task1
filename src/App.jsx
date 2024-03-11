import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/components/Home.jsx';
import Root from './routes/Root.jsx';
import Cart from './pages/Cart/components/Cart.jsx';
import Products from './pages/Products/components/Products.jsx';
import Categories from './pages/categories/components/Categories.jsx';
import Register from './pages/Register/components/Register.jsx';
import Login from './pages/Login/components/Login.jsx';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CategoryProducts from './pages/categoryProducts/components/CategoryProducts.jsx';

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
          path: "/category/:id",
          element:<CategoryProducts/> ,
        },
        {
          path: "/cart",
          element:<Cart/> ,
        },
        {
          path: "/products",
          element:<Products/> ,
        }, 
        {
          path: "/register",
          element:<Register/> ,
        }, 
        {
          path: "/login",
          element:<Login/> ,
        }, 
      ]
    },
  ]);
  return (
   <>
     <RouterProvider router={router} />
     <ToastContainer />
   </>
  )
}
