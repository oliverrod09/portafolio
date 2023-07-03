import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  Button
} from "@material-tailwind/react";
import { experience } from "../data/experience";

export default function Linea() {
  return (
    <div className="w-4/5">
      <Timeline>
        {experience.map((exp, key) => (
          <TimelineItem key={key}>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-0">
                <Avatar
                  size="sm"
                  src={exp.img}
                  alt="user 1"
                />
              </TimelineIcon>
              <Typography variant="h5" className="text-blue-gray-900 dark:text-white">
                {exp.name}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography className="font-normal text-gray-600 dark:text-blue-gray-100">
                {exp.description}
              </Typography>
              <Button onClick={()=>{window.open(exp.link)}} className="bg-[#FFEB02] text-black shadow-[#FFEB02]/20 hover:shadow-[#FFEB02]/40 mt-4">Ver</Button>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
