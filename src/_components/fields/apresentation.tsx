import { technologyOptions } from "@/_constants/technology";
import Technology from "../technology-item";
import LinkButtonItem from "../link-button-item";

const ApresentationField = () => {
  const technologyWithClasses = [
    { className: "absolute top-[25%] -left-[25%]" },
    { className: "absolute top-[75%] -left-[35%]" },
    { className: "absolute top-[50%] -left-[50%]" },
    { className: "absolute top-[50%] -right-[45%]" },
    { className: "absolute top-[75%] -right-[58%] " },
    { className: "absolute top-[25%] -right-[40%]" },
  ];

  return (
    <div className="flex items-center overflow-y-hidden flex-col text-center gap-4 w-full border-b border-solid border-yellowPrimary/15 px-5">
      <div className="flex gap-2 items-center bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary mt-5 ">
        <img
          src="./icons/waving-hand.svg"
          alt="Waving Hand Emoji"
          className="h-10"
        />
        <h1 className="text-xl">
          Hi, I'm{" "}
          <span className="font-bold text-2xl text-yellowPrimary">
            Ghabriel Molina
          </span>
        </h1>
      </div>

      <h1 className="font-semibold text-4xl">
        IT front office applications intern, computer science student and web
        developer
      </h1>

      <p className="text-md font-medium">
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
        <div className="absolute -left-[10%] -bottom-[10%] w-fit flex items-center  justify-center">
          <div className="w-64 h-64 border-4 shadow-lg shadow-white rounded-full"></div>
        </div>
        <img
          src="./profile.png"
          alt="Ghabriel Molina Photo"
          className="w-52 sm:w-60 md:w-72 object-cover relative z-10"
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
