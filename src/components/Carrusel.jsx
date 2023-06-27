import { Carousel } from "@material-tailwind/react";
 
export function Carrusel({project}) {
  return (
    <Carousel
      className="rounded-xl w-full h-full object-cover"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={project.img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={project.img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}