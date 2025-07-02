"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
         <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#home">Dashboard</HoveredLink>
            <HoveredLink href="/MyResume.pdf">Download CV</HoveredLink>
         </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about">About Me</HoveredLink>
            <HoveredLink href="#education">Education</HoveredLink>
            <HoveredLink href="#skills">Skills & Tools</HoveredLink>
            <HoveredLink href="#experience">Experience</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#project">Portfolio</HoveredLink>
            <HoveredLink href="#certificate">Certificates</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/christianjeremy/">LinkedIn</HoveredLink>
            <HoveredLink href="https://github.com/christianary">GitHub</HoveredLink>
            <HoveredLink href="mailto:christinary.personal@gmail.com">Email</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
