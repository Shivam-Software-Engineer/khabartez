import React from 'react'

export default function Header() {
  return (
    <header className="w-full">
  <style>{`
    @keyframes ticker {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>

  {/* Hidden checkbox for mobile menu */}
  <input type="checkbox" id="menu-toggle" className="peer hidden" />

  {/* ================= TOP BAR ================= */}
  <section className="bg-red-900 px-3 text-white">
    <div className="max-w-[1500px] mx-auto flex  items-center justify-between py-2 text-xs sm:text-sm">
      <div className="flex items-center gap-3">
        <span className="animate-pulse rounded bg-red-600 px-2 py-0.5 text-xs font-bold">
          Live
        </span>

        <p className="text-red-100">
          <span className="hidden sm:inline">
            Today's weather: Mumbai 31°C |{" "}
          </span>
          Monday 12 June 2024 | 10:30 AM
        </p>
      </div>

      <a
        href="mailto:editor@khabartej.com"
        className="hidden truncate text-red-100 transition hover:text-white sm:inline"
      >
        editor@khabartej.com
      </a>
    </div>
  </section>

  {/* ================= LOGO + SEARCH ================= */}
  <section className="bg-black px-3 py-2">
    <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 py-1 md:py-4">
      {/* Logo */}
      <a href="/" className="flex shrink-0 items-center gap-3 md:w-1/4">
        <img
          src="/khabartez.png"
          alt="Fast News logo"
          className="h-10 w-10 object-contain sm:h-14 sm:w-14"
        />

        
      </a>

      {/* Search - Desktop */}
      <form
        role="search"
        className="hidden w-full max-w-[480px] items-center rounded-full border-2 border-yellow-400 bg-slate-900 px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-400/50 md:flex"
      >
        <input
          type="text"
          placeholder="Search news..."
          aria-label="Search news"
          className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
        />

        <button
          type="submit"
          aria-label="Search"
          className="text-gray-300 hover:text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
      </form>

      {/* Quick Links - Desktop */}
      <nav className="hidden justify-end gap-5 text-sm font-semibold text-white lg:flex lg:w-1/4">
        <a href="#" className="transition hover:text-yellow-400">
          Breaking News
        </a>

        <a href="#" className="transition hover:text-yellow-400">
          Specific
        </a>

        <a href="#" className="transition hover:text-yellow-400">
          Business
        </a>
      </nav>

      {/* Hamburger - Mobile */}
      <label
        htmlFor="menu-toggle"
        aria-label="Toggle menu"
        className="cursor-pointer rounded border border-gray-700 p-2 text-white md:hidden"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </label>
    </div>

    {/* Search - Mobile */}
    
  </section>

  {/* ================= MAIN NAV ================= */}


{/* ================= MOBILE OVERLAY ================= */}
<label
  htmlFor="menu-toggle"
  className="
    pointer-events-none fixed inset-0 z-40
    bg-black/70 opacity-0
    backdrop-blur-[2px]
    transition-all duration-300
    peer-checked:pointer-events-auto
    peer-checked:opacity-100
    md:hidden
  "
/>

{/* ================= MAIN NAV / MOBILE DRAWER ================= */}
<section
  className="
    fixed right-0 top-0 z-50
    h-screen w-[80%]
    translate-x-full
    overflow-y-auto
    bg-red-900
    shadow-[-10px_0_35px_rgba(0,0,0,0.35)]
    transition-transform duration-300 ease-out
    peer-checked:translate-x-0

    md:static
    md:h-auto
    md:w-full
    md:translate-x-0
    md:overflow-visible
    md:bg-red-700
    md:shadow-none
  "
>
  {/* ================= MOBILE DRAWER HEADER ================= */}
  <div
    className="
      flex items-center justify-between
      border-b border-red-800
      bg-red-950
      px-5 py-4
      md:hidden
    "
  >
    {/* Logo */}
    <a
      href="/"
      className="flex items-center gap-3"
    >
      <div
        className="
          flex h-12 w-12 items-center justify-center
          rounded-lg
          border border-yellow-400/70
          bg-white
          p-1
          shadow-md
        "
      >
        <img
          src="/khabartez.png"
          alt="Khabar Tez"
          className="h-full w-full object-contain"
        />
      </div>
    </a>

    {/* Close Button */}
    <label
      htmlFor="menu-toggle"
      aria-label="Close menu"
      className="
        flex h-11 w-11
        cursor-pointer
        items-center justify-center
        rounded-full
        border border-white/60
        bg-white/5
        text-2xl
        font-light
        leading-none
        text-white
        transition-all duration-200
        hover:border-yellow-400
        hover:bg-red-800
        hover:text-yellow-300
        active:scale-95
      "
    >
      ×
    </label>
  </div>

  {/* ================= MOBILE MENU TITLE ================= */}
  

  {/* ================= NAVIGATION ================= */}
  <nav
    aria-label="Main"
    className="mx-auto max-w-[1120px] py-2 md:py-0"
  >
    <ul
      className="
        flex flex-col
        md:flex-row
        md:flex-wrap
        md:justify-center
      "
    >
      {/* Home */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            bg-red-700
            px-5 py-4
            text-sm font-bold
            text-white
            transition-all duration-200
            hover:bg-red-600
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:bg-red-800
            md:hover:pl-4
          "
        >
          <span className="mr-3 md:hidden text-yellow-300">⌂</span>
          Home
        </a>
      </li>

      {/* All India */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          All India
        </a>
      </li>

      {/* State */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          State
        </a>
      </li>

      {/* Breaking News */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Breaking News
        </a>
      </li>

      {/* Specific */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Specific
        </a>
      </li>

      {/* Crime */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Crime
        </a>
      </li>

      {/* Business */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Business
        </a>
      </li>

      {/* Politics */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Politics
        </a>
      </li>

      {/* Games */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Games
        </a>
      </li>

      {/* Entertainment */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Entertainment
        </a>
      </li>

      {/* Technology */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            border-b border-red-800/80
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:border-0
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          Technology
        </a>
      </li>

      {/* World */}
      <li>
        <a
          href="#"
          className="
            group flex items-center
            px-5 py-4
            text-sm font-semibold
            text-white
            transition-all duration-200
            hover:bg-red-800
            hover:pl-7
            md:px-4
            md:py-3.5
            md:hover:pl-4
          "
        >
          <span
            className=" md:hidden
              mr-3 flex h-2 w-2
              animate-pulse
              rounded-full
              bg-yellow-400
            "
          />
          World
        </a>
      </li>
    </ul>
  </nav>

  {/* ================= MOBILE FOOTER ================= */}
  <div
    className="
      mt-6 border-t border-red-800
      px-5 py-5
      md:hidden
    "
  >
    <p className="text-xs text-red-200">
      Fast • Accurate • Trusted
    </p>

    <p className="mt-1 text-[11px] text-red-300">
      © 2026 Khabar Tez
    </p>
  </div>
</section>

  {/* ================= BREAKING TICKER ================= */}
  <section className=" bg-red-700 px-3">
    <div className="mx-auto flex max-w-[1320px] items-center gap-3 py-2.5">
      <span className="shrink-0 rounded bg-white px-3 py-1 text-xs font-bold text-red-700 sm:text-sm">
        BREAKING NEWS
      </span>

      <div className="relative flex-1 overflow-hidden">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap text-sm font-semibold text-white hover:[animation-play-state:paused]"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          <span className="text-red-200">•</span>

          <span>Stock market boom, Sensex up 800 points</span>

          <span className="text-red-200">•</span>

          <span>Cricket: India beats Australia by 5 wickets</span>

          <span className="text-red-200">•</span>

          <span>
            Cabinet meeting on new education policy today
          </span>

          <span className="text-red-200">•</span>

          <span>New route of Mumbai Metro announced</span>
        </div>
      </div>
    </div>
  </section>
</header>
  )
}
