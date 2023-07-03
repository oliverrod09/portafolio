import React from 'react'
import { useParams } from "react-router-dom";
import { projects3d } from "../data/3d";
import { Nav } from '../components/Nav';
import { ModelVIewer } from '../components/ModelVIewer';
import "../css/Project3D.css"
import Footer from '../components/Footer';

export function Project3D() {
  const {id} = useParams();
  const project = projects3d.filter((pro)=>pro.id == id)[0]
  return (
    <>
    <Nav></Nav>
    <div className='bg-[url(/svg/fondoProject1.svg)] dark:bg-[url(/svg/fondoProject2.svg)] bg-no-repeat bg-cover bg-center'>
      <div className='projectMain mx-auto w-3/4 max-w-screen-lg h-screen flex items-center justify-center lg:block py-12'>
        <ModelVIewer project={project}></ModelVIewer>
      </div>
    </div>
    <Footer></Footer>
      
      
    </>
    
  )
}
