import { Download, Link, Github } from "lucide-react";
import { Button } from "./ui/button";

interface LinkButtonProps {
  name: string;
  url: string;
  icon: "Download" | "Link" | "Github";
}

const iconMap = {
  Download,
  Link,
  Github,
};

const LinkButton = ({ name, url, icon }: LinkButtonProps) => {
  const IconComponent = iconMap[icon];
  return (
    <div>
      <Button
        className="flex gap-2 items-center text-yellowPrimary bg-yellowPrimary/15 rounded-full py-1 px-3 border border-solid border-yellowPrimary"
        asChild
      >
        <a href={url}>
          {IconComponent && <IconComponent />}
          <p className="font-semibold text-base">{name}</p>
        </a>
      </Button>
    </div>
  );
};

export default LinkButton;
