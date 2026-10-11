"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const html = document.documentElement;
      const body = document.body;

      // Different browsers / scroll containers
      const scrollTop = Math.max(
        window.scrollY || 0,
        html.scrollTop || 0,
        body.scrollTop || 0
      );

      setShowButton(scrollTop > 200);
    };

    // Window scroll
    window.addEventListener("scroll", checkScroll, {
      passive: true,
    });

    // Document capture:
    // agar kisi inner container par scroll ho raha ho
    document.addEventListener("scroll", checkScroll, {
      passive: true,
      capture: true,
    });

    // Mobile touch scrolling
    document.addEventListener("touchmove", checkScroll, {
      passive: true,
    });

    // Initial check
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      document.removeEventListener("scroll", checkScroll, true);
      document.removeEventListener("touchmove", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Normal page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Different browser fallback
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-5
        right-4
        z-[999999]

        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-full
        border
        border-gray-300/70

        bg-white/60
        text-gray-800

        shadow-lg
        backdrop-blur-md

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-[#d00000]
        hover:bg-[#d00000]
        hover:text-white

        active:scale-90

        sm:bottom-7
        sm:right-7
        sm:h-12
        sm:w-12

        ${
          showButton
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible translate-y-3 opacity-0"
        }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
};

export default ScrollToTop;