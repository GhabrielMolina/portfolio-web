// https://nikunjthesiya.vercel.app/#skills

import { Header } from "./_components/header";
import ApresentationField from "./_components/fields/apresentation";
import AboutMeField from "./_components/fields/about-me";
import ExperienceField from "./_components/fields/experience";
import ProjectsField from "./_components/fields/projects";
import CertificatesField from "./_components/fields/certificates";
import SkillsField from "./_components/fields/skills";
import ConnectWithMeField from "./_components/fields/connect-with-me";
import EducationField from "./_components/fields/education";
import PortifolioMadeWithField from "./_components/fields/portifolio-made-with";
import { ThemeProvider } from "./_components/theme-provider";
import "../app/globals.css";
import "./index.css";

// TODO: FIX BACKGROUND COLOR AND IMG IN LIGHT MODE
export function App() {
  return (
    <ThemeProvider>
      <div className="bg-pattern bg-no-repeat h-screen bg-center bg-contain">
        <Header />
        <ApresentationField />
      </div>
      <AboutMeField />
      <EducationField />
      <ExperienceField />
      {/* TODO: ADD CERTIFICATE CONTENT */}
      <CertificatesField />
      <SkillsField />
      <ProjectsField />
      <ConnectWithMeField />
      <PortifolioMadeWithField />
    </ThemeProvider>
  );
}
