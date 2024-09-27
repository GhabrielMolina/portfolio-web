import { technologyOptions } from "@/_constants/technology";
import Technology from "../technology-item";
import LinkButtonItem from "../link-button-item";

const ApresentationField = () => {
  const technologyWithClasses = [
    { className: "absolute top-[63%] sm:top-[70%] -left-[45%] sm:-left-[40%]" },
    { className: "absolute top-[35%] sm:top-[45%] -left-[45%] sm:-left-[40%]" },
    { className: "absolute top-[8%] sm:top-[20%] -left-[35%] sm:-left-[30%]" },
    {
      className: "absolute top-[35%] sm:top-[70%] -right-[45%] sm:-right-[50%]",
    },
    {
      className: "absolute top-[8%] sm:top-[20%] -right-[35%] sm:-right-[32%]",
    },
    {
      className: "absolute top-[63%] sm:top-[45%] -right-[46%] sm:-right-[50%]",
    },
  ];

  return (
    <div className="dark:backdrop-blur-sm flex items-center overflow-y-hidden flex-col text-center gap-4 w-full border-b border-solid border-destructive/15 px-5">
      <div className="flex gap-2 items-center bg-destructive/15 rounded-full py-1 px-3 border border-solid border-destructive mt-5 ">
        <img
          src="./icons/waving-hand.svg"
          alt="Waving Hand Emoji"
          className="h-16 sm:h-14"
        />
        <h1 className="text-xl sm:text-2xl">
          Hi, I'm{" "}
          <span className="font-bold text-2xl sm:text-4xl text-destructive">
            Ghabriel Molina
          </span>
        </h1>
      </div>

      <h1 className="font-semibold text-4xl">
        IT front office applications intern, computer science student and web
        developer
      </h1>

      <p className="text-md sm:text-lg font-medium">
        I am an <span className="font-bold">Application Analyst intern</span>{" "}
        for front-office systems and work as a freelance{" "}
        <span className="font-bold">Full Stack Web Developer</span>. I have
        expertise in React.js, TypeScript, JavaScript, Node.js, SQL, and Java.
      </p>

      {/* DOWNLOAD CV */}
      <LinkButtonItem
        name="Download CV"
        icon="Download"
        url="https://drive.google.com/uc?export=download&id=1HOQVfzri_38Hii6gaGy3yi3BE7aPet2K"
      />

      {/* MY PHOTO */}
      <div className="relative">
        <div className="absolute -left-[29%] sm:-left-[18%] -bottom-[20%] sm:-bottom-[15%] w-fit flex items-center  justify-center">
          <div className="w-64 sm:w-80 h-64 sm:h-80 border-4 sm:border-x-8 shadow-lg shadow-secondary rounded-full"></div>
        </div>
        <img
          src="./profile.png"
          alt="Ghabriel Molina Photo"
          className="w-40 sm:w-60 md:w-72 object-cover relative z-10"
        />

        <div>
          {technologyWithClasses.map((techClass, index) =>
            index >= 3 ? (
              <Technology
                key={index - 3}
                title={technologyOptions.frontend[index - 3].title}
                imageURL={technologyOptions.frontend[index - 3].imageURL}
                className={techClass.className}
              />
            ) : (
              <Technology
                key={index}
                title={technologyOptions.backend[index].title}
                imageURL={technologyOptions.backend[index].imageURL}
                className={techClass.className}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ApresentationField;
