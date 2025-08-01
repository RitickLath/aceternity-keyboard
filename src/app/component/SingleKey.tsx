"use client";

import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";

interface KeyProps {
  width?: "normal" | "md" | "lg" | "xl" | "2xl";
  keytop?: ReactElement | IconType | null;
  keybottom?: ReactElement | string | null;
  topAlign?: "left" | "right" | "center";
  bottomAlign?: "left" | "right" | "center";
}

const widthStyle = {
  normal: "w-[60px]",
  md: "w-[70px]",
  lg: "w-[90px]",
  xl: "w-[120px]",
  "2xl": "w-[380px]",
};

const alignStyle = {
  left: "text-left pl-2",
  right: "text-right pr-2",
  center: "text-center",
};

const SingleKey = ({
  width = "normal",
  keytop = null,
  keybottom = null,
  topAlign = "center",
  bottomAlign = "center",
}: KeyProps) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 1 }}
      className={`flex h-[60px] cursor-pointer space-y-2 ${widthStyle[width]} flex-col items-center justify-center rounded-md bg-black px-1 py-1 text-sm font-semibold text-neutral-200 shadow-sm shadow-sky-300`}
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
      {keybottom && (
        <div className={`${alignStyle[bottomAlign]}`}>{keybottom}</div>
      )}
    </motion.div>
  );
};

export default SingleKey;
