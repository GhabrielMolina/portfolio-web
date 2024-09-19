import TitleField from "../title-item";
import Technology from "../technology-item";
import { technologyOptions } from "@/_constants/technology";

const PortifolioMadeWithField = () => {
  return (
    <div className="py-10 border-b border-solid border-y-destructive/15 px-5">
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
  );
};

export default PortifolioMadeWithField;
