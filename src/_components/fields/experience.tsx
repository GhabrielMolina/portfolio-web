import TitleField from "../title-item";
import { experienceOptions } from "@/_constants/experience";
import ExperienceItem from "../experience-item";

const ExperienceField = () => {
  return (
    <div
      id="experience"
      className="py-10 border-b border-solid border-y-destructive/15 w-full"
    >
      <TitleField title="Experience" />

      {/* CARDS */}
      <div
        className="w-full flex flex-col px-3 pt-10 gap-10
        sm:px-20
        md:px-32"
      >
        {experienceOptions.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceField;
