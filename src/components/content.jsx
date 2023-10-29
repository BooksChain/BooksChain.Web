import Image from "next/image";
import React from "react";
import Button from "./button";

export default function Content() {
  return (
    <div className="flex justify-center flex-col items-center pt-20 px-11">
      <h1 className="text-5xl py-5 text-blue-500/80">BooksChain</h1>
      <p className="text-xl text-center text-white">
        BooksChain is a data storage platform that leverages web 3.0 and <br />
        blockchain technologies to enhance the security and permanence of <br />
        data. {" "}
        <span className="text-sky-300">
          You can envision BooksChain as a decentralized library.
        </span>
      </p>
      <div className="pt-7">
        <Button text="Join Community" to="https://discord.gg/XxJyyFncHU" />
      </div>
      <div className="pt-14 flex flex-col items-center">
        <h2 className="text-stone-200 text-xl text-center">Support Us, <br /> We need etherium for blockchain operations</h2>
        <div className="bg-stone-900 bg-opacity-60 p-3 border-stone-700 mt-3 border rounded-3xl flex items-center">
          <Image src="/img/qr.png" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
