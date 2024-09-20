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
    color: "text-black",
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
  {
    title: "WhatsApp",
    imageURL: "/icons/whatsapp-icon.svg",
    url: "https://wa.me/5551991255282?text=Olá%20Ghabriel!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20contigo.",
    color: "text-green-600",
  },
];
