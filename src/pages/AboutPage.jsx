import React from "react";
import { Nav } from "../components/Nav";
import Footer from "../components/Footer";
import { Typography, Button } from "@material-tailwind/react";
import { Icons } from "../components/Icons";
import Linea from "../components/Linea";


export function AboutPage() {
  return (
    <>
    <div className="relative">
      <Nav></Nav>
      <main className="w-full relative pb-32 lg:pb-0 dark:bg-[#02060e]">
        <div className="absolute w-full h-full top-0 left-0 bg-[url(/svg/fondoAbout.svg)] bg-no-repeat bg-cover bg-center opacity-40"></div>
        <div className="landingMain mx-auto max-w-screen-lg h-screen flex items-center justify-center  py-12 ">
          <div className="contentMain relative z-10 flex flex-col items-center lg:gap-6 lg:flex-row-reverse justify-around xl:mt-10vh">
            <div className="paragraphMain flex flex-col justify-center">
              <Typography variant="h1" color="blue-gray" className="mb-2 text-center dark:text-white">
                Sobre mi
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="mb-2 text-center text-sm md:text-base lg:text-lg px-8 dark:text-white"
              >
                Soy un joven de Panamá nacido en el 2001, me encanta la programación en todas las ramas pero me especializo más en la 
                programación web, estoy mejor capacitado para trabajar como Frontend pero tambien tengo habilidades y conocimientos de Backend y estoy dispuesto a aprender más tecnologías de ser necesario.
              </Typography>
              <div className="flex justify-center lg:justify-center mt-3 lg:mt-6">
                <a href="#contactar" className=" cursor-pointer bg-[#FFEB02] text-black shadow-[#FFEB02]/20 hover:shadow-[#FFEB02]/40   align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ">Contacto</a>
              </div>
            </div>
            <div className="imagesMain w-full lg:w-auto mt-4 lg:mt-0">
              <div className="circleLanding mx-auto w-48 h-48 sm:w-80 sm:h-80 lg:h-96 lg:w-96 rounded-full">
                <img
                  src="/images/imgAbout.jpg"
                  alt="Oliver foto"
                  className="w-full h-full rounded-full imgMain object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="py-14 relative dark:bg-[#02060e]">
        <Typography variant="h2" className="text-center lg:text-5xl dark:text-white">
          Estudios y Experiencia
        </Typography>
        <div className="pl-4 lg:pl-14 pt-20">
          <Linea></Linea>
        </div>
      </section>
      <Footer></Footer>
    </div>
      
    </>
  );
}
