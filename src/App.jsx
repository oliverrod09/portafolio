import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@material-tailwind/react";
import './App.css'
import { MainRoutes } from "./routers/MainRoutes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainRoutes></MainRoutes>
    </>
  )
}

export default App
