// https://nikunjthesiya.vercel.app/#skills

import { Download } from "lucide-react";
import { Header } from "./_components/header";
import { Button } from "./components/ui/button";

export function App() {
  return (
    <div className="bg-pattern bg-no-repeat h-screen bg-center">
      <Header />

      {/* APRESENTATION */}
      <div className="flex items-center flex-col text-center gap-4">
        <div className="flex gap-2 items-center bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary mt-5 ">
          <img src="waving-hand.svg" alt="Waving Hand Emoji" className="h-10"/>
          <h1 className="text-xl">Hi, I'm <span className="font-bold text-2xl text-yellowPrimary">Ghabriel Molina</span></h1>
        </div>

        <h1 className="font-semibold text-4xl">IT front office applications intern, computer science student and web developer</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus error atque earum aperiam sint eos itaque sunt ullam repudiandae, qui corporis expedita ducimus obcaecati magni ex odio cumque modi?</p>

        {/* DOWNLOAD CV */}
        <div>
          <Button className="flex gap-2 items-center text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary">
            <Download />
            <p className="font-semi-bold">Download CV</p>
          </Button>
        </div>

        {/* MY PHOTO */}
        <div></div>
      </div>
    </div>
  );
}
