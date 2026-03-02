"use client";
import { useState } from "react";
import Image from "next/image";
import imageAvatar from "../public/images/image-avatar.jpg";
import iconHamburgerMenu from "../public/images/icon-menu.svg";
import iconMenuClose from "../public/images/icon-menu-close.svg";
import iconMoon from "../public/images/icon-moon.svg";
import iconSun from "../public/images/icon-sun.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function NavBar() {
  const sitePages = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Newsletter", href: "/newsletter" },
  ];

  const pathName = usePathname();
  const isPathEqual = (href: string) => pathName === href;

  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <>
      <div className="flex justify-between items-center p-1.5 border-container bg-white">
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
              return (
                <Link
                  key={sitePage.href}
                  href={sitePage.href}
                  className={`${isPathEqual(sitePage.href) ? "border-b-2 border-b-blue-600" : ""}`}
                >
                  {sitePage.name}
                </Link>
              );
            })}
          </div>
          {/* Hamburger for small */}
          <div
            className={`p-2.5 block md:hidden rounded-lg ${isActive ? "bg-black" : "bg-white"}`}
          >
            <Image
              src={isActive ? iconMenuClose : iconHamburgerMenu}
              alt="menu button"
              height={20}
              width={20}
              onClick={() => setIsActive((prevMode) => !prevMode)}
              className="cursor-pointer"
            />
          </div>

          <button
            className="p-2.5 border-container cursor-pointer bg-white dark:bg-black"
            onClick={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
              console.log(resolvedTheme);
            }}
          >
            <Image
              src={resolvedTheme === "dark" ? iconSun : iconMoon}
              alt="light mode button"
              height={20}
              width={20}
            />
          </button>
        </div>
      </div>
      {isActive && (
        <div className="flex flex-col border-container mt-3 px-3">
          {sitePages.map((sitePage) => {
            return (
              <Link
                key={sitePage.href}
                href={sitePage.href}
                className={`py-2 ${sitePage.name != "Newsletter" ? "border-b border-[#424242]" : ""}`}
              >
                {sitePage.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
