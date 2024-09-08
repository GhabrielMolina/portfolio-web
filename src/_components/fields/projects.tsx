import { projectOptions } from "@/_constants/project";
import { Github } from "lucide-react";
import ProjectItem from "../project-item";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import TitleField from "../title-item";

const ProjectsField = () => {
  return (
    <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
      <TitleField title="Projects I’ve Worked on" />

      <div className="flex flex-col items-center gap-20 pt-16">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-md"
        >
          <CarouselContent className="-mt-1 h-[600px]">
            {projectOptions.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* GITHUB */}
        <div>
          <Button className="flex gap-2 items-center text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary">
            <Github />
            <p className="font-semibold text-base">Github</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsField;
