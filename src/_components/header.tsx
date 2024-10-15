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
    "Portfolio Made With",
  ];
  return (
    <div
      className="pt-5 px-2 w-full
      sm:pt-8 sm:px-5
      lg:py-10 lg:px-10
      xl:py-12 xl:px-40
      2xl:py-16 2xl:px-[20%]"
    >
      <div className="bg-secondary rounded-full w-full flex items-center justify-between p-2">
        {/* LOGO && NAME  */}
        <div className="flex items-center gap-2 ">
          <img
            src="./logo/logo.png"
            alt="GH Logo"
            className="h-8 object-contain bg-black rounded-full
            sm:h-12
            md:h-16
            lg:h-20"
          />
          <h1
            className="uppercase text-sm text-primary
            sm:text-lg
            md:text-xl
            lg:text-2xl"
          >
            Ghabriel<span className="font-bold">Molina</span>
          </h1>
        </div>

        {/* LIGHT/DARK MODE && MENU INPUT*/}
        <div
          className="flex items-center gap-1
          sm:gap-3
          md:gap-4
          lg:gap-5"
        >
          <Button
            onClick={toggleTheme}
            className="bg-primary p-1 rounded-full hover:bg-primary/90 delay-75
            sm:p-4
            md:p-6
            lg:p-8"
          >
            <SunMoon
              className="size-5 text-secondary
              sm:size-8
              md:size-9
              lg:size-10"
            />
          </Button>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-primary p-2 h-9 font-semibold rounded-full text-xs text-secondary hover:bg-primary/90 delay-75
                  sm:p-4 sm:h-10 sm:text-base
                  md:p-5 md:h-12 md:text-lg
                  lg:p-6 lg:h-16 lg:text-xl"
                >
                  Menu
                </NavigationMenuTrigger>

                <NavigationMenuContent className="flex flex-col gap-1 px-1">
                  {fields.map((field) => {
                    return (
                      <NavigationMenuLink
                        className="text-secondary font-semibold border-b border-solid 
                        sm:text-lg
                        md:text-xl
                        lg:text-2xl"
                      >
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
