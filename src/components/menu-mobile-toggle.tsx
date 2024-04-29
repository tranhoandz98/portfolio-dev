"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MENU_DATA } from "@/constants/menu";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

export function MenuMobileToggle() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] transition-all " />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          {MENU_DATA.map((menu) => (
            <SheetClose key={menu.id} asChild>
            <Link href={menu.href} >
              {menu.title}
            </Link>
            </SheetClose>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
