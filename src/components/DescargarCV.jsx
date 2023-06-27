import React from 'react'
import { Button } from "@material-tailwind/react";

function DescargarCV() {
    function handdleCV() {
        const url ="/pdf/cv.pdf"
        window.open(url)
    }
  return (
    <>
        <Button onClick={handdleCV} className="bg-black hover:shadow-[#000000]/40">Descargar CV</Button>
    </>
  )
}

export default DescargarCV