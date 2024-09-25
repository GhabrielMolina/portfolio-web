import { Download, Link, Smartphone, ChevronsUp } from "lucide-react";
import { Button } from "./ui/button";

interface LinkButtonProps {
  name: string;
  url: string;
  icon: "Download" | "Link" | "ChevronsUp" | "Smartphone";
}

const iconMap = {
  Download,
  Link,
  ChevronsUp,
  Smartphone,
};

const LinkButtonItem = ({ name, url, icon }: LinkButtonProps) => {
  const IconComponent = iconMap[icon];
  return (
    <div>
      <Button
        className="flex gap-2 items-center text-destructive bg-destructive/15 rounded-full py-1 sm:py-5 px-3 sm:px-4 border border-solid border-destructive"
        asChild
      >
        <a href={url}>
          {IconComponent && <IconComponent className="sm:size-7" />}
          <p className="font-semibold text-base sm:text-lg">{name}</p>
        </a>
      </Button>
    </div>
  );
};

export default LinkButtonItem;
