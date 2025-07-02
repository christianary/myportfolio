"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconFolder,
  IconMessage,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Project",
      icon: <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#project",
    },
    {
      title: "Contact",
      icon: <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // optional
        items={links}
      />
    </div>
  );
}
