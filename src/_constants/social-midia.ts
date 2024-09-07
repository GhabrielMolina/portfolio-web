interface SocialMidiaOption {
  title: string;
  imageURL: string;
  url: string;
  color: string;
}

export const socialMidiaOptions: SocialMidiaOption[] = [
  {
    title: "GitHub",
    imageURL: "/icons/github-icon.svg",
    url: "https://github.com/GhabrielMolina",
    color: "text-black hover:text-white",
  },
  {
    title: "LinkedIn",
    imageURL: "/icons/linkedin-icon.svg",
    url: "https://www.linkedin.com/in/ghabriel-molina",
    color: "text-blue-700",
  },
  {
    title: "ghabrielmolina@hotmail.com",
    imageURL: "/icons/email-icon.svg",
    url: "#",
    color: "text-blue-800",
  },
];
