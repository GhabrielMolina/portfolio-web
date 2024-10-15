import TitleField from "../title-item";
import Technology from "../technology-item";
import { technologyOptions } from "@/_constants/technology";
import { useEffect, useState } from "react";

const PortfolioMadeWithField = () => {
  const [title, setTitle] = useState('Portfolio');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setTitle('Portfolio Made With');
      } else {
        setTitle('Portfolio');
      }
    };

    // Chame a função uma vez para definir o título inicial
    handleResize();

    // Adicione o listener de resize
    window.addEventListener('resize', handleResize);

    // Limpe o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div
      id="portfolio-made-with"
      className="py-10 border-b border-solid border-y-destructive/15 w-full"
    >
      <TitleField title={title} />

      <div className="flex gap-4 pt-5 px-10 flex-wrap w-full justify-center">
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

export default PortfolioMadeWithField;
