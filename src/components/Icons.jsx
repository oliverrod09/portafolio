import { IconButton } from "@material-tailwind/react";
 
export function Icons() {
  return (
    <div className="flex gap-4">
      <IconButton onClick={()=>{window.open("mailto:oliver.antonio.09@gmail.com")}} className="bg-[#ea4335] rounded hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
        <i className="fab fa-google text-lg" />
      </IconButton>

      <IconButton onClick={()=>{window.open("https://www.linkedin.com/in/oliver-rodriguez-166051237")}} className="bg-[#0e76a8] rounded hover:shadow-[#0e76a8]/20 focus:shadow-[#0e76a8]/20 active:shadow-[#0e76a8]/10">
        <i className="fab fa-linkedin-in text-lg" />
      </IconButton>
      <IconButton onClick={()=>{window.open("https://www.instagram.com/oarn_09/")}} className="bg-[#ea4c89] rounded hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
        <i className="fab fa-instagram text-lg" />
      </IconButton>
      <IconButton onClick={()=>{window.open("https://github.com/oliverrod09")}} className="bg-[#333333] rounded hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-github text-lg" />
      </IconButton>
    </div>
  )
}