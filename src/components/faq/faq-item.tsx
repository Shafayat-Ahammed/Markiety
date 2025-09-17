"use client";

import { type FunctionComponent, type JSX, useState } from "react";
import type { FAQItemType as FAQItemProps } from "./types";
import { motion, AnimatePresence } from "motion/react";

const FAQItem: FunctionComponent<FAQItemProps> = ({
  title,
  description,
}: FAQItemProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl px-6 py-3 cursor-pointer flex flex-col justify-center gap-4 hover:scale-102 transition-transform select-none"
      onClick={(): void => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-7">
        <div>
          <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl 2xl:text-2xl">
            {title}
          </h3>
        </div>
        <div>
          <div
            className={`${
              open ? "bg-primary-blue -rotate-180" : "bg-[#191a1f]"
            } p-3 rounded-full transition-transform duration-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={15}
              height={15}
              className="fill-white w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px]"
            >
              <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
            </svg>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div>
              <div>
                <p className="text-primary-gray text-sm sm:text-base 2xl:text-[18.5px]">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
