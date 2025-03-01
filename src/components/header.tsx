import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { MenuMobileToggle } from "./menu-mobile-toggle";
import { MENU_DATA } from "@/constants/menu";

export default function Header() {
 
  return (
    <header className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
      <div className="flex justify-between items-center py-6">
        <div className="font-bold text-3xl text-info">tranhoandz98</div>
        <div className="flex items-center gap-4">
          <ul className="text-sm gap-4 hidden md:flex">
            {MENU_DATA.map((menu) => (
              <li key={menu.id} className="uppercase">
                <Link href={menu.href}>
                  <div>{menu.title}</div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="block md:hidden">
            <MenuMobileToggle />
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
