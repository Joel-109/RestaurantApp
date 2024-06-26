import React from "react";
import { UserButton } from "@clerk/clerk-react";
import {ActiveWindow} from "../../App.tsx";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { FaShoppingCart } from "react-icons/fa";
 
interface NavBarProps {
  SetActiveWindow: React.Dispatch<React.SetStateAction<ActiveWindow>>;
  ActiveWindows: ActiveWindow;
}

export function NavBar(NavBarProps: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "ShoppingCart", window: ActiveWindow.ShoppingCart},
    { name: "Dashboard", window: ActiveWindow.DashBoard},
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="justify-between" maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="https://utfs.io/f/4f59a34f-6c10-4833-9744-73c7a767f86e-1zbfv.webp"
            alt="ACME"
            className="w-8 h-8 rounded-3xl"
          />
          <p className="font-bold text-inherit">FastFood</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            color={
              NavBarProps.ActiveWindows === ActiveWindow.DashBoard
                ? "primary"
                : "foreground"
            }
            href="#"
            onClick={() => NavBarProps.SetActiveWindow(ActiveWindow.DashBoard)}
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color={
              NavBarProps.ActiveWindows === ActiveWindow.ShoppingCart
                ? "primary"
                : "foreground"
            }
            href="#"
            aria-current="page"
            onClick={() => NavBarProps.SetActiveWindow(ActiveWindow.ShoppingCart)}
          >
            <FaShoppingCart />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <UserButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                NavBarProps.ActiveWindows === item.window
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
              onClick={() => NavBarProps.SetActiveWindow(item.window)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
