import { BiCheckShield } from "react-icons/bi";
import Script from "next/script";
import React, { useCallback, useEffect } from "react";
import Card from "./card";

export default function Preview() {
  return (
    <div className="flex flex-wrap px-20 pt-20">
      <Card
        content={
          <div className="w-full h-full flex flex-col items-center">
            <div className="pt-7 flex-col justify-center items-center">
              <BiCheckShield className="text-stone-200 w-20 h-20 text-center text-opacity-40" />
              <span className="text-stone-200 text-2xl items-center text-center text-opacity-60">
                Security
              </span>
              <p className="text-stone-200 text-opacity-60 text-center">
                We care deeply about your safety. Your data is in safe hands
                thanks to Blockchain technology
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
}
