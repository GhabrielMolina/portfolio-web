// https://nikunjthesiya.vercel.app/#skills

import {
  CalendarDays,
  Download,
  Eye,
  Github,
  GraduationCap,
  Info,
  Link,
  MapPin,
  School,
} from "lucide-react";
import { Header } from "./_components/header";
import { Button } from "./_components/ui/button";
import TitleField from "./_components/title-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_components/ui/carousel";
import { Card, CardContent } from "./_components/ui/card";
import Technology from "./_components/technology-item";
import { technologyOptions } from "./_constants/technology";
import { Dialog, DialogTrigger } from "./_components/ui/dialog";
import { socialMidiaOptions } from "./_constants/social-midia";
import ApresentationField from "./_components/fields/apresentation";
import AboutMeField from "./_components/fields/about-me";
import ExperienceField from "./_components/fields/experience";

export function App() {
  const combinedTechnologyOptions = [
    ...technologyOptions.frontend,
    ...technologyOptions.backend,
  ];

  return (
    <div>
      <div className="bg-pattern bg-no-repeat h-screen bg-center bg-contain ">
        <Header />
        <ApresentationField />
      </div>

      <AboutMeField />

      {/* EDUCATION */}
      <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
        <TitleField title="Education" />

        {/* CARDS */}
        <div className="w-full flex flex-col px-5 pt-10 gap-4 ">
          {/* UNIVERSITY */}
          <div className="bg-white bg-opacity-75 w-full rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-yellowPrimary bg-black px-3 py-2 rounded-full font-semibold">
                <CalendarDays />
                <p>2023/2 - PRESENT</p>
              </div>

              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-full font-semibold">
                <GraduationCap />
                <p>Graduation</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black ">
              Bachelor of Computer Science
            </h2>

            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div className="bg-white p-3 rounded-full items-center">
                  <School className=" fill-yellowPrimary text-black" />
                </div>
                <p className="text-black w-[55%]">
                  Pontifical Catholic University of Rio Grande do Sul
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <div className="bg-white p-3 rounded-full">
                  <MapPin className=" fill-yellowPrimary text-black" />
                </div>
                <p className="text-black">Porto Alegre, RS, Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceField />

      {/* TODO: ADD CERTIFICATE CONTENT */}
      {/* CERTIFICATES */}
      <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
        <TitleField title="Certificates" />

        <div className="flex justify-center pt-10">
          <Carousel className="w-full max-w-xs ">
            <CarouselContent className="-ml-1 ">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 "
                >
                  <div className="p-1 ">
                    <Card className="bg-white bg-opacity-75 w-full rounded-xl p-5">
                      <CardContent className="flex items-start flex-col gap-4 p-0 ">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3  bg-black pr-3  rounded-full">
                            <div className="bg-white rounded-full">
                              <img
                                src="./logo/dll-logo.png"
                                alt="DLL Group Logo"
                                className="size-12"
                              />
                            </div>
                            <div>
                              <h3 className="text-yellowPrimary font-bold">
                                Full Stack Club
                              </h3>
                            </div>
                          </div>

                          <img
                            src="./icons/certificate.svg"
                            alt="Certificate"
                            className="size-10"
                          />
                        </div>

                        <h2 className="text-xl font-bold text-black text-left">
                          FSW Barber - FullStack
                        </h2>

                        <div className="flex items-center justify-between w-full">
                          <div className="border-b border-solid border-yellowPrimary/15 w-full">
                            <Button
                              className="gap-2 bg-black rounded-full py-1 px-3 border border-solid border-yellowPrimary"
                              asChild
                            >
                              <a href="">
                                <Eye />
                                <p className="font-semibold text-base">View</p>
                              </a>
                            </Button>
                          </div>

                          <p className="w-full text-right font-medium text-black  shadow-yellowPrimary">
                            AUGUST 2024
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* TODO: DOWNLOAD IMAGES */}
      {/* SKILLS */}
      <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
        <TitleField title="Skills" />

        <div className="flex flex-col gap-5 items-center">
          {/* FRONTEND */}
          <div className="pt-5">
            <TitleField title="Frontend | Use" />

            <div className="flex w-full gap-4 flex-wrap justify-center py-5">
              {technologyOptions.frontend.map((tech, index) => (
                <Technology
                  key={index}
                  title={tech.title}
                  imageURL={tech.imageURL}
                />
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="pt-5">
            <TitleField title="Backend | Use" />

            <div className="flex w-full gap-4 flex-wrap justify-center py-5">
              {technologyOptions.backend.map((tech, index) => (
                <Technology
                  key={index}
                  title={tech.title}
                  imageURL={tech.imageURL}
                />
              ))}
            </div>
          </div>

          {/* OOP */}
          <div className="pt-5">
            <TitleField title="OOP | Use" />

            <div className="flex w-full gap-4 flex-wrap justify-center py-5">
              {technologyOptions.OOP.map((tech, index) => (
                <Technology
                  key={index}
                  title={tech.title}
                  imageURL={tech.imageURL}
                />
              ))}
            </div>
          </div>

          {/* DOWNLOAD CV */}
          <div>
            <Button className="flex gap-2 items-center text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary">
              <Download />
              <p className="font-semibold text-base">Download CV</p>
            </Button>
          </div>
        </div>
      </div>

      {/* TODO: ADD PROJECTS CONTENT */}
      {/* PROJECTS */}
      <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
        <TitleField title="Projects I’veWorked on" />

        <div className="flex flex-col items-center gap-20 pt-16">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-md"
          >
            <CarouselContent className="-mt-1 h-[600px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <Card className="w-full rounded-3xl p-5">
                      <CardContent className="flex flex-col gap-4 p-0 ">
                        {/* IMAGE */}
                        <div>
                          <img src="./projects/fsw-barber-project.png" alt="" />
                        </div>

                        {/* CONTENT */}
                        <div className="w-full">
                          <div className="flex justify-between items-center">
                            <h2 className="font-bold text-4xl">FSW-BARBER</h2>

                            <Dialog>
                              <DialogTrigger>
                                <Info className="text-black fill-yellowPrimary size-8" />
                              </DialogTrigger>
                            </Dialog>
                          </div>

                          <div className="pt-4">
                            <p className="text-xs font-light">Worked on</p>
                            <div className="flex gap-2 items-center pt-1">
                              <p className="bg-stone-800 px-1.5 rounded-full text-sm ">
                                Website
                              </p>
                              <p className="bg-stone-800 px-1.5 rounded-full text-sm ">
                                Deploy
                              </p>
                            </div>
                          </div>

                          <div className="py-4">
                            <p className="text-xs font-light">
                              Technologies I have used
                            </p>

                            <div className="flex flex-wrap justify-start gap-2 pt-1">
                              {combinedTechnologyOptions
                                .filter((tech) =>
                                  [
                                    "ReactJS",
                                    "Typescript",
                                    "NodeJS",
                                    "NextJS",
                                    "TailwindCSS",
                                    "Prisma",
                                  ].includes(tech.title)
                                )
                                .map((tech, index) => (
                                  <Technology
                                    key={index}
                                    title={tech.title}
                                    imageURL={tech.imageURL}
                                  />
                                ))}
                            </div>
                          </div>

                          <div>
                            <Button
                              className="flex gap-2 items-center text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary"
                              asChild
                            >
                              <a href="">
                                <Link />
                                <p className="font-semibold text-base">
                                  Go to FSW-BARBER
                                </p>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
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

      {/* TODO: ADD AVATAR */}
      {/* CONNECT WITH ME */}
      <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
        <TitleField title="Connect With Me" />

        <div className="flex flex-col items-center gap-5 w-full pt-5">
          {socialMidiaOptions.map((social, index) => (
            <Button
              key={index}
              className="flex gap-2 bg-white rounded-full py-1 px-3"
              asChild
            >
              <a href={social.url} className="w-fit">
                <img src={social.imageURL} />
                <p className={`font-semibold text-base ${social.color}`}>
                  {social.title}
                </p>
              </a>
            </Button>
          ))}
        </div>

        <img src="" alt="" />
      </div>

      {/* PORTIFOLIO MADE WITH */}
      <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
        <TitleField title="Portifolio Made With" />

        <div className="flex gap-4 justify-center pt-5">
          {technologyOptions.frontend
            .filter((tech) =>
              ["ReactJS", "Typescript", "TailwindCSS"].includes(tech.title)
            )
            .map((tech, index) => (
              <Technology
                key={index}
                title={tech.title}
                imageURL={tech.imageURL}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
