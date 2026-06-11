"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    };

    const over = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, input, textarea, .domaine-item")) {
        cursor.classList.add("is-link");
      } else {
        cursor.classList.remove("is-link");
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        background: "var(--ink)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%,-50%)",
        transition: "width .25s, height .25s, background .25s, border-radius .25s, border .25s",
        border: "1.5px solid var(--ink)",
      }}
      className="cursor-dot"
    />
  );
}
