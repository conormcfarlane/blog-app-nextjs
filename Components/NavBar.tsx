"use client";

import React from "react";
import Image from "next/image";
import imageAvatar from "../public/images/image-avatar.jpg";
import iconHamburgerMenu from "../public/images/icon-menu.svg";
import iconMoon from "../public/images/icon-moon.svg";
import iconSun from "../public/images/icon-sun.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const sitePages = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Newsletter", href: "/newsletter" },
  ];

  const pathName = usePathname();
  const isPathEqual = (href: string) => pathName === href;
  return (
    <div className="bg-red-500 flex justify-between items-center p-1.5">
      <div>
        <Image
          src={imageAvatar}
          alt="avatar iamge"
          height={40}
          width={40}
          className="rounded-lg"
        />
      </div>
      <div className="flex items-center gap-1.5">
        {/* Pages Links Medium + Large */}
        <div className="gap-6 mr-5 hidden md:flex">
          {sitePages.map((sitePage) => {
            return <Link href={sitePage.href}>{sitePage.name}</Link>;
          })}
        </div>
        {/* Hamburger for small */}
        <div className="p-2.5 block md:hidden">
          <Image
            src={iconHamburgerMenu}
            alt="menu button"
            height={20}
            width={20}
          />
        </div>

        <button className="p-2.5 border rounded-lg">
          <Image src={iconSun} alt="light mode button" height={20} width={20} />
        </button>
      </div>
    </div>
  );
}
