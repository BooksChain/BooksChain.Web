import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex-col items-center">
        <div>
          <h1 className="text-8xl py-4 text-center bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent animate-pulse">Soooooooon</h1>
        </div>
        <div>
          <Button>
            <Link href="https://omerasaf.vercel.app/">
                Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
