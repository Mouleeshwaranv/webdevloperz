import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const touchCursor = (e) => {
      if (e.touches.length > 0) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    const addHoverListeners = () => {
      document.querySelectorAll(".cursor-hover-target").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsActive(true));
        el.addEventListener("mouseleave", () => setIsActive(false));
        el.addEventListener("touchstart", () => setIsActive(true));
        el.addEventListener("touchend", () => setIsActive(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", touchCursor);
    addHoverListeners();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchmove", touchCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 ease-out 
          ${isActive ? "w-32 h-32 bg-purple-500/20" : "w-6 h-6 bg-transparent"}
          mix-blend-difference border-2 border-purple-500`}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
