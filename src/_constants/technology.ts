interface TechnologyOption {
  title: string;
  imageURL: string;
}

export const backendTechnologyOptions: TechnologyOption[] = [
  {
    imageURL: "./technology/reactjs.svg",
    title: "NodeJS",
  },
  {
    imageURL: "./technology/nextjs.svg",
    title: "NextJS",
  },
  {
    imageURL: "./technology/sql.svg",
    title: "SQL Server",
  },
  {
    imageURL: "./technology/tailwind.svg",
    title: "Prisma",
  },
];

export const frontendTechnologyOptions: TechnologyOption[] = [
  {
    imageURL: "./technology/reactjs.svg",
    title: "ReactJS",
  },
  {
    imageURL: "./technology/typescript.svg",
    title: "Typescript",
  },
  {
    imageURL: "./technology/javascript.svg",
    title: "Javascript",
  },
  {
    imageURL: "./technology/tailwind.svg",
    title: "TailwindCSS",
  },
  {
    imageURL: "./technology/html.svg",
    title: "HTML5",
  },
  {
    imageURL: "./technology/css.svg",
    title: "CSS",
  },
];

export const OOPTechnologyOptions: TechnologyOption[] = [
  {
    imageURL: "./technology/java.svg",
    title: "Java",
  },
  {
    imageURL: "./technology/c.svg",
    title: "C++",
  },
];

export const technologyOptions = {
  backend: backendTechnologyOptions,
  frontend: frontendTechnologyOptions,
  OOP: OOPTechnologyOptions,
};
