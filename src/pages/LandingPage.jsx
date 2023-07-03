import React from "react";
import { Nav } from "../components/Nav";
import { Typography, Card, Tooltip, Button } from "@material-tailwind/react";
import "../css/Landing.css";
import { Icons } from "../components/Icons";
import { CardProject } from "../components/CardProject";
import { CardProject3d } from "../components/CardProject3d";
import { Link } from "react-router-dom";
import { technology } from "../data/technology";
import { projects } from "../data/projects";
import { projects3d } from "../data/3d";
import Footer from "../components/Footer";
import DescargarCV from "../components/DescargarCV";

export function LandingPage() {

  const filtProjects = projects.slice(0, 3)
  const filtProjects3d = projects3d.slice(0, 4)
  return (
    <>
      <Nav></Nav>
      <main className="w-full relative pb-32 lg:pb-0 dark:bg-[#02060e]">
        <div className="landingMain mx-auto max-w-screen-lg h-screen flex items-center justify-center lg:block py-12">
          <div className="contentMain flex flex-col items-center lg:flex-row justify-around xl:mt-10vh">
            <div className="paragraphMain flex flex-col justify-center">
              <Typography variant="h1" color="blue-gray" className="mb-2 dark:text-white text-center lg:text-start">
                Oliver Rodríguez
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-center tracking-wider dark:text-blue-gray-100"
              >
                I'm Frontend Developer
              </Typography>
              <div className="flex justify-center lg:justify-start mt-3 lg:mt-6">
                <Icons></Icons>
              </div>
              
            </div>
            <div className="imagesMain w-full lg:w-auto mt-4 lg:mt-0">
              <div className="circleLanding mx-auto w-48 h-48 sm:w-80 sm:h-80 lg:h-96 lg:w-96 rounded-full">
                <img
                  src="/images/imgMain.png"
                  alt="Oliver foto"
                  className="w-full h-full rounded-full imgMain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="landingSvg1 separatorSvgBottom"></div>
      </main>
      <section className="bg-[#FFEB02] py-16">
        <Typography variant="h2" className="text-center lg:text-5xl">
          Tecnologias
        </Typography>
        <div className="flex gap-24 overflow-x-scroll my-9 px-6 py-10 carouselTecnlogias">
          {technology.map((tecn, key) => (
            <div className=" w-60 lg:h-60" key={key}>
              <Tooltip content={`Nivel: ${tecn.level}`}>
                <figure className="mx-auto h-20 w-20 lg:w-32 lg:h-32 text-white">
                  <img src={`${tecn.logo}`} alt="" className="w-full h-full" />
                </figure>
              </Tooltip>

              <Typography
                variant="paragraph"
                className="text-xs lg:text-base text-center font-semibold"
              >
                {tecn.name}
              </Typography>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-12 pb-40 relative dark:bg-[#02060e]">
        <div className="landingSvg2 separatorSvgTop"></div>
        <div className="mt-20 py-16">
          <Typography variant="h2" className="text-center lg:text-5xl mt-10 dark:text-white">
            Proyectos Web
          </Typography>
          <div className="flex flex-wrap lg:px-20 justify-center gap-24 mt-5 pt-8">
            {
              filtProjects.map((project, key)=>(
                <CardProject project={project} key={key}></CardProject>
              ))
            }
          </div>
          {/* <div className="flex justify-center py-20">
            <Link to={"/about"}>
              <Button className="bg-[#FFEB02] text-black shadow-[#FFEB02]/20 hover:shadow-[#FFEB02]/40">Más Proyectos</Button>
            </Link>
          </div> */}
        </div>
        <div className="landingSvg1 separatorSvgBottom"></div>
      </section>
      <section className="py-12 relative dark:bg-[#02060e]">
        <div className="landingSvg2 separatorSvgTop"></div>
        <div className="mt-20 py-1">
          <Typography variant="h2" className="text-center lg:text-5xl mt-10 dark:text-white">
            Proyectos 3D
          </Typography>
          <div className="flex flex-wrap lg:px-20 justify-center gap-24 mt-5 pt-8">
            {
              filtProjects3d.map((project, key)=>(
                <CardProject3d project={project} key={key}></CardProject3d>
              ))
            }
          </div>
          {/* <div className="flex justify-center py-20">
            <Link to={"/about"}>
              <Button className="bg-[#FFEB02] text-black shadow-[#FFEB02]/20 hover:shadow-[#FFEB02]/40">Más Proyectos</Button>
            </Link>
          </div> */}
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
