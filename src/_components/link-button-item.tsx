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
        className="flex gap-2 items-center text-destructive bg-destructive/15 rounded-full py-1 px-3 border border-solid border-destructive"
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

export default LinkButtonItem;
