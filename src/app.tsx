// https://nikunjthesiya.vercel.app/#skills

import { Download, Heart, Mail, Smartphone } from "lucide-react";
import { Header } from "./_components/header";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export function App() {
  return (
    <div>
      <div className="bg-pattern bg-no-repeat h-screen bg-center bg-contain ">
        <Header />

        {/* APRESENTATION */}
        <div className="flex items-center flex-col text-center gap-4 w-full border-b border-solid border-yellowPrimary/15 px-5">
          <div className="flex gap-2 items-center bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary mt-5 ">
            <img
              src="waving-hand.svg"
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

            <div className="absolute top-[25%] -left-[35%] bg-white px-2 py-2 rounded-full flex items-center gap-2">
              <img src="./reactjs.svg" className="w-7" />
              <p className="font-medium text-black text-sm">ReactJS</p>
            </div>

            <div className="absolute top-[50%] -left-[25%] bg-white px-2 py-2 rounded-full flex items-center gap-2">
              <img src="./nodejs.svg" className="w-7" />
              <p className="font-medium text-black text-sm">NodeJS</p>
            </div>

            <div className="absolute top-[72%] -left-[40%] bg-white px-2 py-2 rounded-full flex items-center gap-2">
              <img src="./nextjs.svg" className="w-7" />
              <p className="font-medium text-black text-sm">NextJS</p>
            </div>

            <div className="absolute top-[25%] -right-[55%] bg-white px-2 py-2 rounded-full flex items-center gap-2">
              <img src="typescript.svg" className="w-7 rounded-[8px]" />
              <p className="font-medium text-black text-sm">Typescript</p>
            </div>

            <div className="absolute top-[50%] -right-[45%] bg-white px-2 py-2 rounded-full flex items-center gap-2">
              <img src="javascript.svg  " className="w-7" />
              <p className="font-medium text-black text-sm">Javascript</p>
            </div>

            <div className="absolute top-[75%] -right-[45%] bg-white px-2 py-2 rounded-full flex items-center gap-2">
              <img src="sql-server.svg" className="w-7" />
              <p className="font-medium text-black text-sm">SQL</p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div
        className="mt-40 w-full flex flex-col items-center gap-5"
        id="about-me"
      >
        <div className="relative text-center whitespace-nowrap w-full">
          <h2 className="opacity-10 text-4xl text-yellowPrimary">About Me</h2>
          <h3 className="absolute text-3xl text-yellowPrimary font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            About Me
          </h3>
        </div>

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
                src="airplane-icon.svg"
                alt="Airplane Icon"
                className="w-10"
              />
              <p className="font-bold text-blue-400 text-xl">Travel</p>
            </div>

            <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center w-[150px] justify-center">
              <img src="sports-icon.svg" alt="Sports Icon" className="w-10" />
              <p className="font-bold text-red-600 text-xl">Sports</p>
            </div>

            <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center w-[200px] justify-center">
              <img
                src="motorcycle-icon.svg"
                alt="Motorcycle Icon"
                className="w-10"
              />
              <p className="font-bold text-red-700 text-xl">Motorcycle</p>
            </div>

            <div className="bg-white px-3 py-2 rounded-full flex gap-2 items-center w-[150px] justify-center">
              <img src="beach-icon.svg" alt="Beach Icon" className="w-10" />
              <p className="font-bold text-blue-400 text-xl">Beach</p>
            </div>
          </div>
        </div>

        {/* README */}
        <div className="bg-white bg-opacity-75 rounded-3xl p-6 mx-5">
          <p className="text-sm leading-6 text-black font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            reiciendis saepe illum porro asperiores! Sapiente quos provident,
            obcaecati recusandae dolores deleniti odit dolore soluta odio fuga,
            hic ad repellendus omnis!
          </p>
        </div>

        {/* CONTACTE ME */}
        <div className="border-b border-solid border-yellowPrimary pb-5 w-full flex justify-center">
          <Button className="gap-2 text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary">
            <Smartphone />
            <p className="font-semibold text-base">Connect With Me</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
