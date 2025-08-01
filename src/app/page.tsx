"use client";

import React from "react";
import KeyBoard from "./component/KeyBoard";

const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-x-auto bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Next.Js Custom Keyboard
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-300">
          A beautiful keyboard component built with Next.js, Tailwind CSS, and
          Framer Motion.
        </p>
        <a
          href="#keyboard"
          className="mt-8 rounded-full bg-sky-600 px-6 py-2 text-white transition duration-300 hover:bg-sky-500"
        >
          Try it below ↓
        </a>
      </section>

      {/* Keyboard Showcase Section */}
      <section
        id="keyboard"
        className=" px-4 lg:flex lg:flex-col lg:items-center justify-center pb-24"
      >
        <div className="overflow-hidden rounded-xl border border-gray-700 bg-[#1a1b1e]/40 p-6 shadow-lg backdrop-blur-md">
          <KeyBoard />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Ritick</span> · Keyboard UI
        inspired by Aceternity
      </footer>
    </main>
  );
};

export default Home;
