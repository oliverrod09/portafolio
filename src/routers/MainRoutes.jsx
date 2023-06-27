import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { AboutPage } from "../pages/AboutPage";
import { Project3D } from "../pages/Project3D";

import React from 'react'

export function MainRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/projects3D/:id" element={<Project3D></Project3D>}></Route>
        </Routes>
    </Router>
  )
}

