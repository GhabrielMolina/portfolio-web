interface SocialMidiaOption {
  title: string;
  imageURL: string;
  url: string;
  color: string;
}

export const socialMidiaOptions: SocialMidiaOption[] = [
  {
    title: "GitHub",
    imageURL: "/icons/github.png",
    url: "#",
    color: "text-black hover:text-white",
  },
  {
    title: "LinkedIn",
    imageURL: "/icons/linkedin.png",
    url: "#",
    color: "text-blue-400",
  },
  {
    title: "ghabrielmolina@hotmail.com",
    imageURL: "/icons/email.png",
    url: "#",
    color: "text-red-700",
  },
];
