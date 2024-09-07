import TitleField from "../title-item";
import { experienceOptions } from "@/_constants/experience";
import ExperienceItem from "../experience-item";

const ExperienceField = () => {
  return (
    <div className="py-10 border-b border-solid border-y-yellowPrimary/15 px-5">
      <TitleField title="Experience" />

      {/* CARDS */}
      <div className="w-full flex flex-col px-5 pt-10 gap-10 ">
        {experienceOptions.map((experience, index) => (
          <ExperienceItem
            key={index}
            name={experience.name}
            position={experience.position}
            locale={experience.locale}
            imageURL={experience.imageURL}
            description={experience.description}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceField;
