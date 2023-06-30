import React from 'react'
import { Button } from "@material-tailwind/react";

function DescargarCV() {
    function handdleCV() {
        const url ="/pdf/cv.pdf"
        window.open(url)
    }
  return (
    <>
    <a href="/pdf/cv.pdf" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-[#000000]/20 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-black hover:shadow-[#000000]/40'>Descargar CV</a>
        {/* <Button onClick={handdleCV} className="bg-black hover:shadow-[#000000]/40">Descargar CV</Button> */}
    </>
  )
}

export default DescargarCV