import React from 'react'
import { useParams } from "react-router-dom";
import { projects3d } from "../data/3d";
import { Nav } from '../components/Nav';
import { ModelVIewer } from '../components/ModelVIewer';
import "../css/Project3D.css"

export function Project3D() {
  const {id} = useParams();
  const project = projects3d.filter((pro)=>pro.id == id)[0]
  return (
    <>
    <Nav></Nav>
    <div className='bg-[url(/svg/fondo2.svg)] bg-no-repeat bg-cover'>
      <div className='projectMain mx-auto w-3/4 max-w-screen-lg h-screen flex items-center justify-center lg:block py-12 dark:bg-black'>
        <ModelVIewer project={project}></ModelVIewer>
      </div>
    </div>
      
      
    </>
    
  )
}
