import { Heart } from "lucide-react";
import TitleField from "../title-item";
import Loves from "../love-item";
import LinkButtonItem from "../link-button-item";

const AboutMeField = () => {
  const loves = [
    { name: "Travel", src: "./icons/airplane-icon.svg" },
    { name: "Sports", src: "./icons/sports-icon.svg" },
    { name: "Motorcycle", src: "./icons/motorcycle-icon.svg" },
    { name: "Beach", src: "./icons/beach-icon.svg" },
    { name: "Eletronic Music", src: "./icons/music-icon.svg" },
    { name: "Technology", src: "./icons/technology-icon.svg" },
    { name: "Games", src: "./icons/games-icon.svg" },
    { name: "Movies", src: "./icons/movies-icon.svg" },
    { name: "Coding", src: "./icons/coding-icon.svg" },
    { name: "Food", src: "./icons/food-icon.svg" },
    { name: "Happy Hour", src: "./icons/happy-hour-icon.svg" },
  ];

  return (
    <div
      className="mt-36 w-full flex flex-col items-center gap-5 py-10 border-b border-solid border-y-destructive/15
      sm:mt-0
      lg:mt-32
      xl:mt-36"
      id="about-me"
    >
      <TitleField title="About Me" />

      {/* I LOVE */}
      <div
        className="flex flex-col items-start w-full gap-3 
        lg:pl-20
        xl:pl-44
        2xl:px-[20%]"
      >
        <div
          className="flex gap-2 items-center px-5
          lg"
        >
          <Heart
            className=" fill-secondary
            md:size-7"
          />

          <div className="relative text-center whitespace-nowrap">
            <h2
              className="opacity-10 text-destructive text-3xl
              md:text-4xl"
            >
              I Love
            </h2>
            <h3
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-destructive
              md:text-3xl"
            >
              I Love
            </h3>
          </div>
        </div>

        <div
          className="flex items-center gap-3 pl-5 w-full overflow-x-scroll [&::-webkit-scrollbar]:hidden
          lg:pl-0"
        >
          {loves.map((love) => (
            <Loves key={love.name} name={love.name} src={love.src} />
          ))}
        </div>
      </div>

      {/* README */}
      <div
        className="bg-secondary/15 rounded-3xl p-6 mx-5
        lg:mx-20
        xl:mx-44
        2xl:mx-[20%]"
      >
        <p
          className="text-sm leading-6 font-semibold text-secondary
          md:text-lg"
        >
          I am passionate about technology and always looking for new challenges
          to grow both personally and professionally. I love working in a team,
          learning new things and applying my knowledge to create innovative
          solutions.
          <br />
          <br />
          I am 22 years old and I am a Computer Science student at PUCRS,
          currently in the 3rd semester. In addition, I was accepted into the
          Computer Engineering course at UFSC in 2020, which reflects my
          interest and dedication to the technology area from an early age.
          <br />
          <br />I have solid programming experience, mastering technologies such
          as React.js, Java, C++, HTML5, CSS (Tailwind) and JavaScript. In
          addition, I have been deepening my knowledge in TypeScript and
          Node.js, and exploring Next.js and SQL. I always try to stay up to
          date and improve my skills, by participating in events such as
          FullStack Week and specialized courses at Alura.
          <br />
          <br />
          My professional journey is marked by diverse experiences, ranging from
          the IT/Infrastructure sector at Factum to customer service at Núcleo
          Meu Cartão. I also have experience as an Officer Candidate R/2 in the
          Brazilian Army, which helped me develop leadership, discipline and
          teamwork.
        </p>
      </div>

      {/* CONTACTE ME */}
      <LinkButtonItem
        name="Contact With Me"
        url="#connect-with-me"
        icon="Smartphone"
      />
    </div>
  );
};

export default AboutMeField;
