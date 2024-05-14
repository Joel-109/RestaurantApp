import React from "react";
import { UserButton } from "@clerk/clerk-react";
import {ActiveWindow} from "../../App.tsx";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
 
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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="justify-around">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img
            src="https://utfs.io/f/a47bcfcf-7caa-4cfa-b744-314e69a9e702-ojmlqz.png"
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
            Clients
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
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