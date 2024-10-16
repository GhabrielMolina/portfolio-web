import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "/app/globals.css";
import AboutMeField from "./_components/fields/about-me";
import ApresentationField from "./_components/fields/apresentation";
import CertificatesField from "./_components/fields/certificates";
import ConnectWithMeField from "./_components/fields/connect-with-me";
import EducationField from "./_components/fields/education";
import ExperienceField from "./_components/fields/experience";
import PortfolioMadeWithField from "./_components/fields/portfolio-made-with";
import ProjectsField from "./_components/fields/projects";
import SkillsField from "./_components/fields/skills";
import { Header } from "./_components/header";
import { ThemeProvider } from "./_components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="bg-pattern bg-no-repeat bg-center bg-auto md:h-fit overflow-hidden">
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
      <PortfolioMadeWithField />
      </div>
    </ThemeProvider>
  </StrictMode>
);
