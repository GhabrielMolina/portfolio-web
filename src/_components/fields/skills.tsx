import { technologyOptions } from "@/_constants/technology";
import TitleField from "../title-item";
import Technology from "../technology-item";
import LinkButtonItem from "../link-button-item";

const SkillsField = () => {
  return (
    <div
      id="skills"
      className="py-10 border-b border-solid border-y-destructive/15 w-full"
    >
      <TitleField title="Skills" />

      <div
        className="flex flex-col gap-5 items-center
        md:px-20"
      >
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
        <LinkButtonItem
          name="Download CV"
          icon="Download"
          url="https://drive.google.com/uc?export=download&id=1HOQVfzri_38Hii6gaGy3yi3BE7aPet2K"
        />
      </div>
    </div>
  );
};

export default SkillsField;
