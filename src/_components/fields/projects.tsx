import { projectOptions } from "@/_constants/project";
import ProjectItem from "../project-item";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import TitleField from "../title-item";
import LinkButtonItem from "../link-button-item";
import { useEffect, useState } from "react";

const ProjectsField = () => {
  const [title, setTitle] = useState("Projects");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setTitle("Projects I’ve Worked on");
      } else {
        setTitle("Projects");
      }
    };

    // Chame a função uma vez para definir o título inicial
    handleResize();

    // Adicione o listener de resize
    window.addEventListener("resize", handleResize);

    // Limpe o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="projects"
      className="py-20 border-b border-solid border-y-destructive/15 w-full"
    >
      <TitleField title={title} />

      <div className="flex flex-col items-center gap-20 pt-28 px-1">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-md"
        >
          <CarouselContent
            className="-mt-1 h-[600px]
            md:h-[750px]"
          >
            {projectOptions.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* GITHUB */}
        <LinkButtonItem name="Back to Top" icon="ChevronsUp" url="/" />
      </div>
    </div>
  );
};

export default ProjectsField;
