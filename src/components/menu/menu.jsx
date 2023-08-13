import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function Menu({ page }) {
  return (
    <div className="flex w-full h-[75px] fixed justify-center mt-6">
      <div className=" border border-[#43434394] w-[97%] rounded-2xl flex justify-center items-center">
        <div className="w-[97%] justify-between h-full flex items-center">
          <div className="flex justify-start">
            <Link href="/" className="text-white text-2xl">
              BooksChain
            </Link>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              underline={page == "home" ? "always" : "hover"}
              className="text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              underline={page == "about" ? "always" : "hover"}
              className="text-white"
            >
              About
            </Link>
            <Link
              href="/library"
              underline={page == "library" ? "always" : "hover"}
              className="text-white"
            >
              Home
            </Link>
            <Link
              href="/mission"
              underline={page == "mission" ? "always" : "hover"}
              className="text-white"
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-end gap-2">
            <Button radius="sm" color="primary" variant="ghost">
              Login
            </Button>
            <Button radius="sm">Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
