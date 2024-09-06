// https://nikunjthesiya.vercel.app/#skills

import {
  CalendarDays,
  Download,
  Eye,
  GraduationCap,
  Heart,
  MapPin,
  School,
  Smartphone,
} from "lucide-react";
import { Header } from "./_components/header";
import { Button } from "./_components/ui/button";
import TitleField from "./_components/title-field";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./_components/carousel";
import { Card, CardContent } from "./_components/ui/card";
import Technology from "./_components/technology";
import { technologyOptions } from "./_constants/technology";

export function App() {
  const technologyWithClasses = [
    { className: "absolute top-[25%] -left-[35%]" },
    { className: "absolute top-[50%] -left-[25%]" },
    { className: "absolute top-[72%] -left-[40%]" },
    { className: "absolute top-[25%] -right-[55%]" },
    { className: "absolute top-[50%] -right-[45%]" },
    { className: "absolute top-[75%] -right-[45%]" },
  ];

  return (
    <div>
      <div className="bg-pattern bg-no-repeat h-screen bg-center bg-contain ">
        <Header />

        {/* APRESENTATION */}
        <div className="flex items-center flex-col text-center gap-4 w-full border-b border-solid border-yellowPrimary/15 px-5">
          <div className="flex gap-2 items-center bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary mt-5 ">
            <img
              src="./icons/waving-hand.svg"
              alt="Waving Hand Emoji"
              className="h-10"
            />
            <h1 className="text-xl">
              Hi, I'm{" "}
              <span className="font-bold text-2xl text-yellowPrimary">
                Ghabriel Molina
              </span>
            </h1>
          </div>

          <h1 className="font-semibold text-4xl">
            IT front office applications intern, computer science student and
            web developer
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            possimus error atque earum aperiam sint eos itaque sunt ullam
            repudiandae, qui corporis expedita ducimus obcaecati magni ex odio
            cumque modi?
          </p>

          {/* DOWNLOAD CV */}
          <div>
            <Button className="flex gap-2 items-center text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary">
              <Download />
              <p className="font-semibold text-base">Download CV</p>
            </Button>
          </div>

          {/* MY PHOTO */}
          <div className="relative">
            <img
              src="./profile.png"
              alt="Ghabriel Molina Photo"
              className="w-52 sm:w-60 md:w-72 object-cover"
            />

            <div>
              {technologyWithClasses.map((techClass, index) =>
                index >= 3 ? (
                  <Technology
                    key={index - 3}
                    title={technologyOptions.frontend[index - 3].title}
                    imageURL={technologyOptions.frontend[index - 3].imageURL}
                    className={techClass.className}
                  />
                ) : (
                  <Technology
                    key={index}
                    title={technologyOptions.backend[index].title}
                    imageURL={technologyOptions.backend[index].imageURL}
                    className={techClass.className}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div
        className="mt-40 w-full flex flex-col items-center gap-5"
        id="about-me"
      >
        <TitleField title="About Me" />

        {/* I LOVE */}
        {/* TODO: fix the overflow */}
        <div className="flex flex-col items-start w-full gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden lg:items-center">
          <div className="flex gap-2 items-center px-5">
            <Heart className=" fill-white" />

            <div className="relative text-center w-full whitespace-nowrap">
              <h2 className="opacity-10 text-yellowPrimary text-3xl">I Love</h2>
              <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-yellowPrimary">
                I Love
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 pl-5">
            <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center w-[150px] justify-center">
              <img
                src="./icons/airplane-icon.svg"
                alt="Airplane Icon"
                className="w-10"
              />
              <p className="font-bold text-blue-400 text-xl">Travel</p>
            </div>

            <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center w-[150px] justify-center">
              <img
                src="./icons/sports-icon.svg"
                alt="Sports Icon"
                className="w-10"
              />
              <p className="font-bold text-red-600 text-xl">Sports</p>
            </div>

            <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center w-[200px] justify-center">
              <img
                src="./icons/motorcycle-icon.svg"
                alt="Motorcycle Icon"
                className="w-10"
              />
              <p className="font-bold text-red-700 text-xl">Motorcycle</p>
            </div>

            <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center w-[150px] justify-center">
              <img
                src="./icons/beach-icon.svg"
                alt="Beach Icon"
                className="w-10"
              />
              <p className="font-bold text-blue-400 text-xl">Beach</p>
            </div>
          </div>
        </div>

        {/* README */}
        <div className="bg-stone-900 bg-opacity-75 rounded-3xl p-6 mx-5">
          <p className="text-sm leading-6 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            reiciendis saepe illum porro asperiores! Sapiente quos provident,
            obcaecati recusandae dolores deleniti odit dolore soluta odio fuga,
            hic ad repellendus omnis!
          </p>
        </div>

        {/* CONTACTE ME */}
        <div className="border-b border-solid border-yellowPrimary/15 pb-5 w-full flex justify-center">
          <Button className="gap-2 text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary">
            <Smartphone />
            <p className="font-semibold text-base">Connect With Me</p>
          </Button>
        </div>
      </div>

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

      {/* EXPERIENCE */}
      <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
        <TitleField title="Experience" />

        {/* TODO: ADJUST WIDTH RIGHT ARROW AND COMPLETE INFORMATION*/}
        {/* CARDS */}
        <div className="w-full flex flex-col px-5 pt-10 gap-4 ">
          {/* DLL Group */}
          <div className="bg-white bg-opacity-75 w-full rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-3  bg-black px-3 py-2 rounded-full">
                <div className="bg-white rounded-full">
                  <img
                    src="./logo/dll-logo.png"
                    alt="DLL Group Logo"
                    className="size-12"
                  />
                </div>
                <div>
                  <h3 className="text-yellowPrimary font-bold">DLL Group</h3>

                  <div className="flex gap-1 items-start mr-1">
                    <div className="bg-stone-900 rounded-full p-1">
                      <MapPin className="size-3" />
                    </div>
                    <p className="text-xs font-normal">
                      Porto Alegre, RS, Brazil
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-full font-semibold">
                <CalendarDays className="size-4" />
                <p className="text-xs">August 2024 - PRESENT</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black ">
              IT Front Office Applications Intern
            </h2>

            <div className="space-y-2">
              <div className="flex gap-2 text-black">
                <img
                  src="/icons/right-arrow.svg"
                  alt="Right Arrow Icon"
                  className="min-w-fit"
                />

                <p className="text-sm font-medium">
                  ASSIST IN SUPPORTING CORPORATE FINANCIAL SYSTEMS
                </p>
              </div>

              <div className="flex gap-2 text-black">
                <img
                  src="/icons/right-arrow.svg"
                  alt="Right Arrow Icon"
                  className="min-w-fit"
                />

                <p className="text-sm font-medium">
                  SUPPORT THE TEAM IN INVESTIGATING INCIDENTS AND DIAGNOSING
                  PROBLEMS
                </p>
              </div>

              <div className="flex gap-2 text-black">
                <img
                  src="/icons/right-arrow.svg"
                  alt="Right Arrow Icon"
                  className="min-w-fit"
                />

                <p className="text-sm font-medium">
                  CONTRIBUTE TO AVOIDING THE OCCURENCE OF INCIDENTS THROUGH
                  PROACTIVE ANALYSIS MINIMIZING THE IMPACT OF INCIDENTS THAT
                  CANNOT BE AVOIDED THROUGH ALTERNATIVE SYSTEMIC FLOW OR
                  CREATION AND APPLICATION OF DATABASE SCRIPTS
                </p>
              </div>

              <div className="flex gap-2 text-black">
                <img
                  src="/icons/right-arrow.svg"
                  alt="Right Arrow Icon"
                  className="min-w-fit"
                />

                <p className="text-sm font-medium">
                  UNDERSTAND, SUPPORT AND ENSURE THAT THE WRITING OF THE RCA
                  (ROOT CAUSE ANALYSIS) OF THE PROBLEMS IS PROVIDED WITH
                  QUALITY, GENERATING SUBSIDIES FOR SYSTEMIC CORRECTION OF THE
                  DEVELOPMENT TEAMS AIMING AT THE STABILITY OF THE APPLICATIONS
                </p>
              </div>
            </div>
          </div>

          {/* RENNER */}
          <div className="bg-white bg-opacity-75 w-full rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-3  bg-black px-3 py-2 rounded-full">
                <div className="bg-white rounded-full p-2">
                  <img
                    src="./logo/renner-logo.svg"
                    alt="Renner Logo"
                    className="size-10"
                  />
                </div>
                <div>
                  <h3 className="text-yellowPrimary font-bold">Renner</h3>

                  <div className="flex gap-1 items-start mr-1">
                    <div className="bg-stone-900 rounded-full p-1">
                      <MapPin className="size-3" />
                    </div>
                    <p className="text-xs font-normal">
                      Porto Alegre, RS, Brazil
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-full font-semibold">
                <CalendarDays className="size-4" />
                <p className="text-xs">September 2023 - June 2024 </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black ">
              External Customer Service Assistant - Central Meu Cartão
            </h2>

            <div className="space-y-2">
              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">EXTERNAL CUSTOMER SERVICE</p>
              </div>

              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">
                  CREDIT CARD AND FINANCIAL ACCOUNT RELATED PROBLEM RESOLUTIONS
                </p>
              </div>

              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">CALL OPENINGS</p>
              </div>

              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">
                  CUSTOMER AND INTERNAL EMPLOYEE SUPPORT
                </p>
              </div>

              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">FINANCIAL ACTIVITIES</p>
              </div>
            </div>
          </div>

          {/* FACTUM */}
          <div className="bg-white bg-opacity-75 w-full rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-3  bg-black px-3 py-2 rounded-full">
                <div className="bg-white rounded-full p-2">
                  <img
                    src="./logo/factum-logo.png"
                    alt="Factum Logo"
                    className="size-10 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-yellowPrimary font-bold">Factum</h3>

                  <div className="flex gap-1 items-start mr-1">
                    <div className="bg-stone-900 rounded-full p-1">
                      <MapPin className="size-3" />
                    </div>
                    <p className="text-xs font-normal">
                      Porto Alegre, RS, Brazil
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-full font-semibold">
                <CalendarDays className="size-4" />
                <p className="text-xs">May 2022 - June 2022</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black ">
              IT / INFRASTRUCTURE INTERN
            </h2>

            <div className="space-y-2">
              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">TEST</p>
              </div>
            </div>
          </div>

          {/* E.B. */}
          <div className="bg-white bg-opacity-75 w-full rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-3  bg-black px-3 py-2 rounded-full">
                <div className="bg-white rounded-full p-2">
                  <img
                    src="./logo/eb-logo.svg"
                    alt="Brazilian Army Logo"
                    className="size-10 object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-yellowPrimary font-bold">CPOR</h3>

                  <div className="flex gap-1 items-start mr-1">
                    <div className="bg-stone-900 rounded-full p-1">
                      <MapPin className="size-3" />
                    </div>
                    <p className="text-xs font-normal">
                      Porto Alegre, RS, Brazil
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-full font-semibold">
                <CalendarDays className="size-4" />
                <p className="text-xs">February 2021 - December 2021</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black ">
              ASPIRING RESERVE OFFICER R/2
            </h2>

            <div className="space-y-2">
              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">TEST</p>
              </div>
            </div>
          </div>

          {/* PDPE */}
          <div className="bg-white bg-opacity-75 w-full rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-3  bg-black px-3 py-2 rounded-full">
                <div className="bg-white rounded-full p-2">
                  <img
                    src="./logo/pge-logo.png"
                    alt="Brazilian Army Logo"
                    className="size-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-yellowPrimary font-bold">PGE-RS</h3>

                  <div className="flex gap-1 items-start mr-1">
                    <div className="bg-stone-900 rounded-full p-1">
                      <MapPin className="size-3" />
                    </div>
                    <p className="text-xs font-normal">
                      Porto Alegre, RS, Brazil
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-full font-semibold">
                <CalendarDays className="size-4" />
                <p className="text-xs">March 2019 - November 2019</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black ">
              STATE PUBLIC DOMAIN OFFICE INTERN - PDPE
            </h2>

            <div className="space-y-2">
              <div className="flex gap-2 text-black items-start">
                <img src="right-arrow.svg" alt="Right Arrow Icon" />

                <p className="text-sm font-medium">TEST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
