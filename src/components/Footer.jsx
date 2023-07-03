import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Icons } from "./Icons";
import "../css/Footer.css";
import DescargarCV from "./DescargarCV";

function Footer() {
  return (
    <footer className="w-full  p-8 footer" id="contactar">
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <DescargarCV></DescargarCV>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-10 items-center">
          <Typography className="font-medium text-lg text-black">Contactar:</Typography>
          <Icons></Icons>
          {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul> */}
        </div>
        
      </div>
      <hr className="my-8 border-black" />
      <Typography color="blue-gray" className="text-center font-bold">
        &copy; Oliver Rodríguez 2023
      </Typography>
    </footer>
  );
}

export default Footer;