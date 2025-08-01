"use client";

import React from "react";
import SingleKey from "./component/SingleKey";
import { FaMoon } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-6 space-x-6 bg-black/90 text-white">
      <SingleKey
        width="normal"
        keytop={FaMoon}
        keybottom="N"
        topAlign="center"
        bottomAlign="center"
      />
      <SingleKey
        width="md"
        keytop={FaMoon}
        keybottom="M"
        topAlign="center"
        bottomAlign="center"
      />
      <SingleKey
        width="lg"
        keytop={FaMoon}
        keybottom="L"
        topAlign="center"
        bottomAlign="center"
      />
      <SingleKey
        width="xl"
        keytop={FaMoon}
        keybottom="Enter"
        topAlign="center"
        bottomAlign="center"
      />
      <SingleKey
        width="2xl"
        keybottom="Space"
        topAlign="center"
        bottomAlign="center"
      />
    </div>
  );
};

export default Home;
