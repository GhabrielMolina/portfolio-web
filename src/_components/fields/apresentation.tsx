import { technologyOptions } from "@/_constants/technology";
import Technology from "../technology-item";
import LinkButtonItem from "../link-button-item";

const ApresentationField = () => {
  const technologyWithClasses = [
    {
      className:
        "absolute top-[63%] sm:top-[70%] -left-[45%] sm:-left-[40%] md:-left-[38%] lg:-left-[45%]",
    },
    {
      className:
        "absolute top-[35%] sm:top-[45%] -left-[45%] sm:-left-[40%] lg:-left-[45%]",
    },
    {
      className:
        "absolute top-[8%] sm:top-[20%] -left-[35%] sm:-left-[30%] md:-left-[30%] lg:-left-[35%]",
    },
    {
      className:
        "absolute top-[35%] sm:top-[70%] -right-[45%] sm:-right-[50%] lg:-right-[55%]",
    },
    {
      className:
        "absolute top-[8%] sm:top-[20%] -right-[35%] sm:-right-[32%] md:-right-[38%] lg:-right-[45%]",
    },
    {
      className:
        "absolute top-[63%] sm:top-[45%] -right-[46%] sm:-right-[50%] md:-right-[50%] lg:-right-[55%]",
    },
  ];

  return (
    <div
      className="dark:backdrop-blur-sm flex items-center overflow-y-hidden flex-col text-center gap-4 w-full border-b border-solid border-destructive/15 px-5 
      lg:px-20 lg:gap-8
      2xl:px-[20%]"
    >
      <div className="flex gap-2 items-center bg-destructive/15 rounded-full py-1 px-3 border border-solid border-destructive mt-5 ">
        <img
          src="./icons/waving-hand.svg"
          alt="Waving Hand Emoji"
          className="h-16 
          sm:h-14
          lg:h-20"
        />
        <h1
          className="text-xl 
          sm:text-2xl
          lg:text-3xl"
        >
          Hi, I'm{" "}
          <span
            className="font-bold text-2xl text-destructive
            sm:text-4xl
            lg:text-5xl"
          >
            Ghabriel Molina
          </span>
        </h1>
      </div>

      <h1
        className="font-semibold text-4xl
        lg:text-5xl"
      >
        IT front office applications intern, computer science student and web
        developer
      </h1>

      <p
        className="text-md font-medium
        sm:text-lg
        lg:text-xl"
      >
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
      <div className="relative mt-10">
        <div
          className="absolute -left-[29%] -bottom-[20%] w-fit flex items-center justify-center
          sm:-left-[18%] sm:-bottom-[15%]
          md:-left-[14%]
          lg:-left-[19%] lg:-bottom-[18%]"
        >
          <div
            className="w-64 h-64 border-4 shadow-lg shadow-secondary rounded-full
            sm:w-80 sm:h-80 sm:border-x-8
            md:w-96 md:h-96
            lg:w-[28rem] lg:h-[28rem]"
          ></div>
        </div>
        <img
          src="./profile.png"
          alt="Ghabriel Molina Photo"
          className="w-40 object-cover relative z-10
          sm:w-60 
          md:w-72
          lg:w-80"
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
