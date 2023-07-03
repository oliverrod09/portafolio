import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { Carrusel } from "../components/Carrusel";
import { Link } from "react-router-dom";
 
  export function CardProject({project}) {
    return (
      <Card className="mt-6 w-96 shadow-xl dark:bg-[#02060e] dark:shadow-[#636363] dark:shadow-md">
      <CardHeader color="blue-gray" className="relative h-56">
        <Carrusel project={project}></Carrusel>
        {/* <img src={project.img1} alt={project.img1} className="object-cover w-full h-full" /> */}
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-white">
          {project.client}
        </Typography>
        <Typography className="dark:text-blue-gray-100">
          {project.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 relative">
        <Button onClick={()=>{window.open(project.link)}} className="bg-[#FFEB02] text-black shadow-[#FFEB02]/20 hover:shadow-[#FFEB02]/40">Ver</Button>
        
      </CardFooter>
    </Card>
    );
  }