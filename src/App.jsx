import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@material-tailwind/react";
import './App.css'
import { MainRoutes } from "./routers/MainRoutes";
import { MainContext } from "./context/MainContext";

function App() {
  const {dark} = useContext(MainContext)

  return (
    <>
    <div className={dark}>
      <MainRoutes></MainRoutes>
    </div>
    
    </>
  )
}

export default App
