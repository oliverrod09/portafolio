import React from 'react'
import { Typography } from "@material-tailwind/react";
import { CardProject3d } from "../components/CardProject3d";
import { projects3d } from "../data/3d";
import { Nav } from "../components/Nav";
import Footer from "../components/Footer";

function Projects3D() {
    
  return (
    <>
        <Nav></Nav>
      <main className="dark:bg-[#02060e] p-1 bg-[url(/svg/fondoAbout.svg)] bg-no-repeat bg-cover bg-center bg-opacity-80">
        <div className="pb-16">
          <Typography
            variant="h2"
            className="text-center lg:text-5xl mt-10 dark:text-white"
          >
            Proyectos 3D
          </Typography>
          <div className="flex flex-wrap lg:px-20 justify-center gap-24 mt-5 pt-8">
            {projects3d.map((project, key) => (
              <CardProject3d project={project} key={key}></CardProject3d>
            ))}
          </div>
          {/* <div className="flex justify-center py-20">
            <Link to={"/about"}>
              <Button className="bg-[#FFEB02] text-black shadow-[#FFEB02]/20 hover:shadow-[#FFEB02]/40">Más Proyectos</Button>
            </Link>
          </div> */}
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Projects3D