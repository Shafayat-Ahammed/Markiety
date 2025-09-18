"use client";

import { type FunctionComponent, type JSX, useState, useEffect } from "react";
import Image from "next/image";
import NavMenuItem from "./nav-menu-item";
import PrimaryButton from "../primary-button/primary-button";
import { motion, AnimatePresence } from "motion/react";
import type { NavMenuItemType } from "./types";

const Header: FunctionComponent = (): JSX.Element => {
  const [hash, setHash] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  useEffect((): (() => void) => {
    setHash(window.location.hash);

    const onHashChange: () => void = (): void => setHash(window.location.hash);

    const onResize: () => void = (): void => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    window.addEventListener("resize", onResize);

    return (): void => {
      window.removeEventListener("hashchange", onHashChange);

      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navMenuItems: NavMenuItemType[] = [
    {
      href: "#services",
      label: "Services",
    },
    {
      href: "#why-us",
      label: "Why Us",
    },
    {
      href: "#work",
      label: "Work",
    },
    {
      href: "#testimonials",
      label: "Testimonials",
    },
    {
      href: "#process",
      label: "Process",
    },
    {
      href: "#faq",
      label: "FAQ",
    },
  ];

  return (
    <>
      <header
        className={`bg-[#111111] px-5 sm:px-10 py-5 z-100 sticky top-0 ${
          open ? "sm:border-b sm:border-gray-800" : "border-b border-gray-800"
        }`}
      >
        <div className="mx-auto max-w-[1536px] flex justify-between items-center">
          <div>
            <a href="/" className="flex items-center gap-2.5">
              <div>
                <Image
                  src="/assets/logo.png"
                  alt="Markiety Logo"
                  width={50}
                  height={50}
                  className="rounded-lg w-[40px] h-[40px] 2xl:w-[45px] 2xl:h-[45px]"
                  priority={true}
                />
              </div>
              <div>
                <h1 className="text-white text-xl 2xl:text-[25px] font-bold">
                  Markiety
                </h1>
              </div>
            </a>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex gap-1.5">
              {navMenuItems.map(
                ({ href, label }, index: number): JSX.Element => {
                  return (
                    <li key={index} className="text-base 2xl:text-xl">
                      <NavMenuItem href={href} hash={hash} label={label} />
                    </li>
                  );
                }
              )}
            </ul>
          </nav>
          <div className="hidden lg:block text-base 2xl:text-xl">
            <PrimaryButton
              href="/#contact"
              border="border-6"
              px="px-2.5"
              py="py-1"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width={22}
                  height={22}
                  className="w-[20px] h-[20px] 2xl:w-[22px] 2xl:h-[22px] mt-0.5 fill-white"
                >
                  <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                </svg>
              }
              label="Book A Call"
            />
          </div>
          <div className="h-[40px] lg:hidden">
            <button
              type="button"
              className="outline-none cursor-pointer"
              onClick={(): void => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={40}
                height={40}
                className="fill-white hover:fill-gray-400 transition-colors"
              >
                <path d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="fixed top-20 sm:top-21 right-0 sm:right-10 z-99 w-full sm:w-[400px]">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div
                className={`bg-primary-black w-full flex flex-col justify-center items-center gap-4 text-center py-7 sm:rounded-lg border-b sm:border border-gray-800`}
              >
                <nav>
                  <ul className="flex flex-col gap-1.5">
                    {navMenuItems.map(
                      ({ href, label }, index: number): JSX.Element => {
                        return (
                          <li key={index} className="flex justify-center">
                            <NavMenuItem
                              href={href}
                              hash={hash}
                              label={label}
                            />
                          </li>
                        );
                      }
                    )}
                  </ul>
                </nav>
                <div>
                  <PrimaryButton
                    href="/#contact"
                    border="border-4"
                    px="px-3"
                    py="py-1.5"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        width={22}
                        height={22}
                        className="w-[20px] h-[20px] 2xl:w-[22px] 2xl:h-[22px] mt-0.5 fill-white"
                      >
                        <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                      </svg>
                    }
                    label="Book A Call"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
