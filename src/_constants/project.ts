interface ProjectOption {
  title: string;
  description: string[];
  imageURL: string;
  workedOn: string[];
  technologies: string[];
  link: string;
}

export const projectOptions: ProjectOption[] = [
  {
    title: "FSW-BARBER",
    description: [
      "Barbershop version 2.0 is a complete application developed using Next.js and React.js for the front-end and PostgreSQL as the database, with Prisma for communication with the bank.",
      "The interface is styled with Tailwind CSS, ensuring a responsive and modern design.",
      "The login system uses Google authentication, and there is a robust scheduling system, where data is saved in the database.",
      "The project includes interactive components with ShadCN and is built in TypeScript and JavaScript, integrating Node.js in the back-end.",
    ],
    imageURL: "./projects/fsw-barber-project.png",
    workedOn: ["Website", "Deploy"],
    technologies: [
      "ReactJS",
      "Typescript",
      "NodeJS",
      "NextJS",
      "TailwindCSS",
      "Prisma",
    ],
    link: "https://fullstackweek-barber-v2-azure.vercel.app/",
  },
  {
    title: "plann.er",
    description: [
      "The plann.er project is a travel planning application built with TypeScript, TailwindCSS, Prisma, Fastify, Zod, Postman, and Vite.",
      "It covers both front-end development and API interaction on the backend.",
      "The application allows sending email invitations to participants, integrating a trip confirmation.",
      "Using Prisma to manage the database and Fastify for the server, the application is streamlined and efficient.",
      "Data validation is done with Zod, and Postman was used to test API requests.",
      "The interface is styled with TailwindCSS, providing a minimalist and responsive design.",
      "The flow includes creating trips, inviting people, confirming guests, and organizing trip details.",
    ],
    imageURL: "./projects/plann-er-project.png",
    workedOn: ["Website"],
    technologies: ["ReactJS", "Typescript", "NodeJS", "TailwindCSS", "Prisma"],
    link: "https://github.com/GhabrielMolina/NLW-plann.er",
  },
  {
    title: "FSW-FOOD",
    description: [
      "FSW-FOOD is an online replica of the iFood platform, offering users a familiar experience to browse and order food.",
      "It enables users to log in using their Google accounts, after which they can explore a range of restaurants and products, place orders, favorite their preferred items, and track their order delivery status.",
      "The frontend of the project was developed using React.js and Next.js, leveraging their capabilities for server-side rendering and fast client-side navigation.",
      "Prisma was employed for efficient database management and communication, while NextAuth handles the authentication flows, offering a seamless login experience.",
      "The design was made using TailwindCSS, ensuring responsiveness across devices, while Shadcn/UI was utilized to maintain a consistent, modern interface.",
      "Lucide-react icons were integrated for additional visual clarity and better user experience.",
      "During the development of this project, I refined and deepened my understanding of key technologies such as React.js, TypeScript, Next.js, and TailwindCSS, while exploring the benefits of libraries like Shadcn/UI and Lucide-react.",
      "The focus was on building a functional, user-friendly platform that mimics the core features of iFood, prioritizing performance, design, and usability.",
    ],
    imageURL: "./projects/fsw-food-project.png",
    workedOn: ["Website", "Deploy"],
    technologies: ["ReactJS", "Typescript", "NextJS", "TailwindCSS", "Prisma"],
    link: "https://fullstackweek-foods-brown.vercel.app/",
  },
  {
    title: "pass.in",
    description: [
      "The application consists of a list of participants registered for a specific event, where all the data from the back-end is presented.",
      "Regarding the database, documentation was created for better API access and Prisma technologies were used.",
      "The front-end was developed using React.js and TypeScript, with TailwindCSS for styling.",
      "The back-end is built with Node.js, ensuring efficient communication with the database.",
    ],
    imageURL: "./projects/pass-in-project.png",
    workedOn: ["Website"],
    technologies: ["ReactJS", "Typescript", "NodeJS", "TailwindCSS", "Prisma"],
    link: "https://github.com/GhabrielMolina/Rocketseat_NLW-Pass",
  },
  {
    title: "Dev Festival",
    description: [
      "Dev Festival 2022 is a Front End Web and Mobile application built during HTML / CSS / JS studies, in order to exercise knowledge only.",
      "The application consists of a music festival website, where there is a home page showing a little about the event, a ticket purchase page that interacts with the user, storing their name, email and how many tickets purchased, there is also a button that enables LightMode/DarkMode and supports mobile, tablet or computer versions.",
      "The project was developed using HTML, CSS and JavaScript, and was deployed on GitHub Pages.",
    ],
    imageURL: "./projects/dev-festival-project.jpeg",
    workedOn: ["Website", "Deploy"],
    technologies: ["HTML5", "CSS", "Javascript"],
    link: "https://ghabrielmolina.github.io/DevFestival-WebSite/",
  },
];
