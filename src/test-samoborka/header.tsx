"use client";

import HeaderMenu from "@/components/base/header-menu";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import MenuIcon from "@/assets/icons/menu.svg";
import SearchIcon from "@/assets/icons/search.svg";
import Link from "next/link";
import Input from "@/components/ui/input";
import Container from "@/components/ui/container";
import Logo from "@/assets/ui/logo.svg";
import { useLenis } from "lenis/react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      if (isSidebarOpen) {
        document.body.style.overflow = "hidden";
        document.body.setAttribute("data-lenis-prevent", "");
      } else {
        document.body.style.overflow = "auto";
        document.body.removeAttribute("data-lenis-prevent");
      }
    }
  }, [isSidebarOpen, lenis]);

  return (
    <header className="bg-background p-4">
      <Container className="flex justify-between items-center gap-6">
        <Link href={"/"}>
          <Logo width={230} />
        </Link>
        <div className="hidden lg:block max-w-[500px] w-full">
          <Input
            leftElement={<SearchIcon width={17} />}
            placeholder="Pretraži"
            type="search"
          />
        </div>
        <div className="flex gap-6">
          <Link href={"/contact"}>
            <Button className="hidden lg:block h-full" color="red">
              Kontakt
            </Button>
          </Link>
          <Button
            className="hidden lg:block"
            onClick={toggleSidebar}
            color="transparent"
            leftElement={
              <>
                <MenuIcon width={24} />
              </>
            }
          >
            Menu
          </Button>
          <div
            className="block lg:hidden border-1 p-4 rounded-full cursor-pointer"
            onClick={toggleSidebar}
          >
            <MenuIcon width={24} />
          </div>
        </div>
      </Container>

      <HeaderMenu isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </header>
  );
};
export default Header;
