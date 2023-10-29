import Link from "next/link";
import React from "react";

export default function Button({ text, to = null, customStyle }) {
  return (
    <button
      className={
        customStyle != null
          ? customStyle
          : "bg-white text-gray-800 px-3 py-2 rounded-xl active:bg-opacity-80 trabsition-all duration-100"
      }
    >
      {to != null ? <Link href={to}>{text}</Link> : <span>{text}</span>}
    </button>
  );
}
