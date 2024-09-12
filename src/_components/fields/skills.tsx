import { technologyOptions } from "@/_constants/technology";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import TitleField from "../title-item";
import Technology from "../technology-item";

const SkillsField = () => {
  return (
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
  );
};

export default SkillsField;
