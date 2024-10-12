import { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Crousel from './components/Crousel'
import Toprestaurant from './components/Toprestaurant'
import Footer from './components/Footer'
import Apicomponents from './components/Apicomponents'
// import {createBrowserRouter} from 'react-router-dom'
import './App.css'
import { createContext} from 'react';



function App() {
  const [cartitem,setcartitem]=useState([]);
  const cartcontext=createContext({
    cart:cartitem
  })
  
 
  return (
    <>
    <cartcontext.Provider value={{cartitem,setcartitem}}>
  <Apicomponents></Apicomponents>
  <hr />
  </cartcontext.Provider>
  <Footer></Footer>
    </>
  )
}

export default App;
