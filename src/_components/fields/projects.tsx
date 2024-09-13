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
        <LinkButtonItem name="Back to Top" icon="ChevronsUp" url="#top" />
      </div>
    </div>
  );
};

export default ProjectsField;
