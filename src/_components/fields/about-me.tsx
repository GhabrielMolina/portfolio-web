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
      className="mt-40 w-full flex flex-col items-center gap-5 py-10 border-b border-solid border-y-yellowPrimary/15 px-5"
      id="about-me"
    >
      <TitleField title="About Me" />

      {/* I LOVE */}
      {/* TODO: fix the overflow */}
      <div className="flex flex-col items-start w-full gap-3 lg:items-center">
        <div className="flex gap-2 items-center px-5">
          <Heart className=" fill-white" />

          <div className="relative text-center whitespace-nowrap">
            <h2 className="opacity-10 text-yellowPrimary text-3xl">I Love</h2>
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl text-yellowPrimary">
              I Love
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 pl-5 w-full overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {loves.map((love) => (
            <Loves key={love.name} name={love.name} src={love.src} />
          ))}
        </div>
      </div>

      {/* README */}
      <div className="bg-stone-900 bg-opacity-75 rounded-3xl p-6 mx-5">
        <p className="text-sm leading-6 font-semibold">
          I am passionate about technology and always looking for new challenges
          to grow both personally and professionally. I love working in a team,
          learning new things and applying my knowledge to create innovative
          solutions.
          <br />
          I am 22 years old and I am a Computer Science student at PUCRS,
          currently in the 3rd semester. In addition, I was accepted into the
          Computer Engineering course at UFSC in 2020, which reflects my
          interest and dedication to the technology area from an early age.
          <br />I have solid programming experience, mastering technologies such
          as React.js, Java, C++, HTML5, CSS (Tailwind) and JavaScript. In
          addition, I have been deepening my knowledge in TypeScript and
          Node.js, and exploring Next.js and SQL. I always try to stay up to
          date and improve my skills, by participating in events such as
          FullStack Week and specialized courses at Alura.
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
        url="#ConnectWithMe"
        icon="Smartphone"
      />
    </div>
  );
};

export default AboutMeField;
