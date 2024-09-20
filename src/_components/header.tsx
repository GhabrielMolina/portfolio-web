import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/_components/ui/navigation-menu";
import { SunMoon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { Link } from "@radix-ui/react-navigation-menu";

export function Header() {
  const { toggleTheme } = useTheme();
  const fields = [
    "About Me",
    "Education",
    "Experience",
    "Certificates",
    "Skills",
    "Projects",
    "Connect With Me",
    "Portifolio Made With",
  ];
  return (
    <div className="p-5 w-full">
      <div className="bg-secondary rounded-full w-full flex items-center justify-between p-2">
        {/* LOGO && NAME  */}
        <div className="flex items-center gap-2 ">
          <img
            src="./logo/logo.png"
            alt="GH Logo"
            className="h-10 bg-black rounded-full"
          />
          <h1 className="uppercase  text-primary">
            Ghabriel<span className="font-bold">Molina</span>
          </h1>
        </div>

        {/* LIGHT/DARK MODE && MENU INPUT*/}
        <div className="flex items-center gap-3">
          <Button
            onClick={toggleTheme}
            className="bg-primary rounded-full p-2 hover:bg-primary/90 delay-75"
          >
            <SunMoon className="text-sm text-secondary" />
          </Button>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-primary rounded-full text-sm text-secondary hover:bg-primary/90 delay-75">
                  Menu
                </NavigationMenuTrigger>

                <NavigationMenuContent className="flex flex-col gap-1 px-1">
                  {fields.map((field) => {
                    return (
                      <NavigationMenuLink className="text-secondary font-semibold border-b border-solid ">
                        <Link
                          href={`#${field.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {field}
                        </Link>
                      </NavigationMenuLink>
                    );
                  })}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
