import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter } from "react-router-dom"
import Cart from './components/Cart.jsx'
const router=createBrowserRouter([
  {
    path:"/",element: <App/>
  },
  {
    path:"/about",element: <Cart/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
