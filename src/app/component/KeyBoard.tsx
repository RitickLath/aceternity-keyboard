import React from "react";
import SingleKey from "./SingleKey";
import {
  topRowKeys,
  SecondRowKeys,
  ThirdRowKeys,
  FourthRowKeys,
  FifthRowKeys,
  SixthRowKeys,
} from "../constant/keySequence";
import { FaChevronUp, FaChevronDown, FaChevronRight } from "react-icons/fa";

const KeyBoard = () => {
  return (
    <div className="flex flex-col justify-start gap-2 overflow-x-hidden rounded-lg bg-[#29292C]/40 p-4 text-white backdrop-blur-md">
      <div className="flex gap-2">
        {topRowKeys.map((keyProps, idx) => (
          <SingleKey key={idx} {...keyProps} />
        ))}
      </div>

      <div className="flex gap-2">
        {SecondRowKeys.map((keyProps, idx) => (
          <SingleKey key={idx} {...keyProps} />
        ))}
      </div>

      <div className="flex gap-2">
        {ThirdRowKeys.map((keyProps, idx) => (
          <SingleKey key={idx} {...keyProps} />
        ))}
      </div>

      <div className="flex gap-2">
        {FourthRowKeys.map((keyProps, idx) => (
          <SingleKey key={idx} {...keyProps} />
        ))}
      </div>

      <div className="flex gap-2">
        {FifthRowKeys.map((keyProps, idx) => (
          <SingleKey key={idx} {...keyProps} />
        ))}
      </div>

      <div className="flex gap-2">
        {SixthRowKeys.map((keyProps, idx) => (
          <SingleKey key={idx} {...keyProps} />
        ))}
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-1">
            <div className="flex flex-col gap-1">
              <SingleKey keytop={FaChevronUp} btnLast={true} />
              <SingleKey keytop={FaChevronDown} btnLast={true} />
            </div>
            <SingleKey keytop={FaChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBoard;
