import React from "react";
import Button from "./button";
import Link from "next/link";

export default function Menu() {
  //bg-[#141414]
  return (
    <div className="flex flex-col shadow-[#202020] shadow-md">
      <div className="flex justify-between px-4 py-4 items-center">
        <div>
          <Link href="/" className="text-white text-2xl">
            BooksChain
          </Link>
        </div>
        <div className="flex justify-between">
          <Link
            className="text-white px-2 active:text-stone-300 transition-all duration-100"
            href="/login"
          >
            Home
          </Link>
          <Link
            className="text-white px-2 active:text-stone-300 transition-all duration-100"
            href="/login"
          >
            About
          </Link>
          <Link
            className="text-white px-2 active:text-stone-300 transition-all duration-100"
            href="/login"
          >
            Join Community
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link
            className="text-white px-2 active:text-stone-300 transition-all duration-100"
            href="/login"
          >
            Login
          </Link>
          <Button text="Sign In" />
        </div>
      </div>
    </div>
  );
}
