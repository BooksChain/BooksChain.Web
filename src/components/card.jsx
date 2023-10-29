import Script from "next/script";
import React, { useCallback, useEffect } from "react";

export default function Card({content}) {
  const handleOnMouseMove = useCallback((e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", x + "px");
    target.style.setProperty("--mouse-y", y + "px");
  }, []);

  useEffect(() => {
    for (const card of document.querySelectorAll(".card")) {
      card.onmousemove = handleOnMouseMove;
    }

    return () => {
      for (const card of document.querySelectorAll(".card")) {
        card.onmousemove = null;
      }
    };
  }, []);

  <Script id="my-script">
    {`
        ${handleOnMouseMove.toString()}
    
        document.querySelectorAll(".card").forEach(card => {
          card.onmousemove = handleOnMouseMove;
        });
      `}
  </Script>;

  return (
    <div className="cards flex flex-wrap">
      <div className="card">
        <div className="card-border" />
        <div className="card-content">
            {content}
        </div>
      </div>
    </div>
  );
}
