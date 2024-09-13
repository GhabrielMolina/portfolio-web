// https://nikunjthesiya.vercel.app/#skills

import { CalendarDays, GraduationCap, MapPin, School } from "lucide-react";
import { Header } from "./_components/header";
import TitleField from "./_components/title-item";
import Technology from "./_components/technology-item";
import { technologyOptions } from "./_constants/technology";

import ApresentationField from "./_components/fields/apresentation";
import AboutMeField from "./_components/fields/about-me";
import ExperienceField from "./_components/fields/experience";
import ProjectsField from "./_components/fields/projects";
import CertificatesField from "./_components/fields/certificates";
import SkillsField from "./_components/fields/skills";
import ConnectWithMeField from "./_components/fields/connect-with-me";

export function App() {
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
      <CertificatesField />
      <SkillsField />
      <ProjectsField />
      <ConnectWithMeField />

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
