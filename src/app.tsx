// https://nikunjthesiya.vercel.app/#skills

import { Download } from "lucide-react";
import { Header } from "./_components/header";
import { Button } from "./components/ui/button";

export function App() {
  const linguage = [
    "ReactJS",
    "NodeJS",
    "NextJS",
    "Typescript",
    "Javascript",
    "SQL",
  ];

  return (
    <div>
      <div className="bg-pattern bg-no-repeat h-screen bg-center bg-contain">
        <Header />

        {/* APRESENTATION */}
        <div className="flex items-center flex-col text-center gap-4 w-full border-b border-solid border-yellowPrimary/15 ">
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
              <p className="font-semi-bold">Download CV</p>
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
              <img src="javascript.svg" className="w-7" />
              <p className="font-medium text-black text-sm">Javascript</p>
            </div>

            <div className="absolute top-[75%] -right-[45%] bg-white px-2 py-2 rounded-full flex items-center gap-2">
              <img src="sql-server.svg" className="w-7" />
              <p className="font-medium text-black text-sm">SQL</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}
