import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/_components/ui/navigation-menu";
import { SunMoon } from "lucide-react";

export function Header() {
  return (
    <div className="py-5 w-full">
      <div className="bg-white rounded-full w-full flex items-center justify-between p-2">
        {/* LOGO && NAME  */}
        <div className="flex items-center gap-2 ">
          <img
            src="logo.png"
            alt="GH Logo"
            className="h-10 bg-black rounded-full"
          />
          <h1 className="uppercase  text-zinc-950">
            Ghabriel<span className="font-bold">Molina</span>
          </h1>
        </div>

        {/* LIGHT/DARK MODE && MENU INPUT*/}
        <div className="flex items-center gap-3">
          <div className="bg-black rounded-full p-2 cursor-pointer">
            <SunMoon className="text-sm" />
          </div>

          {/* TODO: Fazer menu de navegação */}
          <NavigationMenu className="bg-black rounded-full  hover:bg-yellowPrimary text-black">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-white">
                  Menu
                </NavigationMenuTrigger>

                <NavigationMenuContent className=" bg-yellowPrimary">
                  <NavigationMenuLink className="text-black font-semibold"></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
