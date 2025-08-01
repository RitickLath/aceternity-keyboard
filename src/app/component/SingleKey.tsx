"use client";

import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";

export interface KeyProps {
  width?: "normal" | "md" | "lg" | "xl" | "2xl" | "3xl";
  keytop?: ReactElement | IconType | null | string;
  keybottom?: ReactElement | string | null;
  topAlign?: "left" | "right" | "center";
  bottomAlign?: "left" | "right" | "center";
  justify?: "end" | "center" | "start";
  className?: string;
  btnLast?: boolean;
  bright?: boolean;
}

const widthStyle = {
  normal: "w-[50px] sm:w-[55px] md:w-[60px] lg:w-[60px]",
  md: "w-[40px] sm:w-[45px] md:w-[60px] lg:w-[70px]",
  lg: "w-[50px] sm:w-[55px] md:w-[70px] lg:w-[80px]",
  xl: "w-[65px] sm:w-[75px] md:w-[90px] lg:w-[100px]",
  "2xl": "w-[75px] sm:w-[90px] md:w-[110px] lg:w-[132px]",
  "3xl": "w-[120px] sm:w-[160px] md:w-[250px] lg:w-[330px]",
};

const alignStyle = {
  left: "text-left py-1",
  right: "text-right",
  center: "text-center",
};

const justifyStyle = {
  end: "justify-end",
  start: "justify-start",
  center: "justify-center",
};

const SingleKey = ({
  width = "normal",
  keytop = null,
  keybottom = null,
  topAlign = "center",
  bottomAlign = "center",
  justify = "center",
  className = "",
  btnLast = false,
  bright = false,
}: KeyProps) => {
  return (
    <div>
      <motion.div
        animate={
          bright
            ? {
                scale: [1, 1.03, 1],
              }
            : {}
        }
        transition={
          bright
            ? {
                delay: 1,
                duration: 2,
                repeat: Infinity,
              }
            : {}
        }
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 1 }}
        className={`${className} ${btnLast ? "h-[25px] lg:h-[27px]" : "h-[50px] lg:h-[50px]"} flex cursor-pointer space-y-0.5 md:space-y-1 ${widthStyle[width]} ${justifyStyle[justify]} flex-col items-center rounded-md border-t-2 border-l-2 border-gray-600 bg-black p-2 text-xs font-semibold text-neutral-200 shadow-md ${bright ? "shadow-blue-500" : "shadow-neutral-300"} hover:shadow-lg hover:shadow-neutral-600 sm:text-sm`}
      >
        {/* Top text/Icon */}
        {keytop && (
          <div className={`${alignStyle[topAlign]}`}>
            {/* conditional render (if text (+, - ,*, & , ^) / icon) */}
            {typeof keytop === "function" ? (
              React.createElement(keytop, {
                className: `w-full ${alignStyle[topAlign]}`,
              })
            ) : (
              <div className={`${alignStyle[topAlign]}`}>{keytop}</div>
            )}
          </div>
        )}

        {/* Bottom text/icon */}
        {!btnLast && keybottom && (
          <div className={`w-full px-2 ${alignStyle[bottomAlign]}`}>
            {keybottom}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SingleKey;
