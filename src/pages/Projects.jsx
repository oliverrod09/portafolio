import React from "react";
import { Typography } from "@material-tailwind/react";
import { projects } from "../data/projects";
import { CardProject } from "../components/CardProject";
import { Nav } from "../components/Nav";
import Footer from "../components/Footer";


function Projects() {
  return (
    <>
      <Nav></Nav>
      <main className="dark:bg-[#02060e] p-1 bg-[url(/svg/fondoAbout.svg)] bg-no-repeat bg-cover bg-center bg-opacity-80">
        <div className="pb-16">
          <Typography
            variant="h2"
            className="text-center lg:text-5xl mt-10 dark:text-white"
          >
            Proyectos Web
          </Typography>
          <div className="flex flex-wrap lg:px-20 justify-center gap-24 mt-5 pt-8">
            {projects.map((project, key) => (
              <CardProject project={project} key={key}></CardProject>
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
  );
}

export default Projects;
