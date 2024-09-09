import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Info, Link } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import { technologyOptions } from "@/_constants/technology";
import Technology from "./technology-item";

interface ProjectItemProps {
  title: string;
  description: string[];
  imageURL: string;
  workedOn: string[];
  technologies: string[];
  link: string;
}

const ProjectItem = ({
  title,
  description,
  imageURL,
  workedOn,
  technologies,
  link,
}: ProjectItemProps) => {
  const combinedTechnologyOptions = [
    ...technologyOptions.frontend,
    ...technologyOptions.backend,
  ];

  return (
    <CarouselItem className="pt-1 md:basis-1/2">
      <div className="p-1">
        <Card className="w-full rounded-3xl p-5">
          <CardContent className="flex flex-col gap-4 p-0 ">
            {/* IMAGE */}
            <div>
              <img src={imageURL} />
            </div>

            {/* CONTENT */}
            <div className="w-full">
              <div className="flex gap-3 items-center">
                <h2 className="font-bold text-4xl">{title}</h2>

                {/* TDOD ADD INFO PROJECT */}
                <Dialog>
                  <DialogTrigger >
                    <Info className="text-black fill-yellowPrimary size-9 hover:fill-none hover:text-white" />
                  </DialogTrigger>

                  <div className="flex items-center justify-center ">
                    <DialogContent className="w-[80%] max-h-[80%] bg-zinc-900 border-none rounded-xl overflow-y-auto [&::-webkit-scrollbar]:hidden">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{title}</DialogTitle>
                      </DialogHeader>
                      {description.map((desc, index) => (
                        <DialogDescription
                          key={index}
                          className="text-md font-semibold -tracking-tight"
                        >
                          {desc}
                        </DialogDescription>
                      ))}
                    </DialogContent>
                  </div>
                </Dialog>
              </div>

              <div className="pt-4">
                <p className="text-xs font-light">Worked on</p>
                <div className="flex gap-2 items-center pt-1">
                  {workedOn.map((work, index) => (
                    <p
                      key={index}
                      className="bg-stone-800 px-1.5 rounded-full text-sm "
                    >
                      {work}
                    </p>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <p className="text-xs font-light">Technologies I have used</p>

                <div className="flex flex-wrap justify-start gap-2 pt-1">
                  {technologies.map((tech, index) => {
                    const technology = combinedTechnologyOptions.find(
                      (t) => t.title === tech
                    );

                    if (!technology) return null;

                    return (
                      <Technology
                        key={index}
                        title={technology.title}
                        imageURL={technology.imageURL}
                      />
                    );
                  })}
                </div>
              </div>

              <div>
                <Button
                  className="flex gap-2 items-center text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary"
                  asChild
                >
                  <a href={link}>
                    <Link />
                    <p className="font-semibold text-base">Go to {title}</p>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default ProjectItem;
