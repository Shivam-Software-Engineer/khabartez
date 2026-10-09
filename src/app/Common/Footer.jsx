
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white mt-[25px]">

  {/* ================= MAIN FOOTER ================= */}
  <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-10">

    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

      {/* ================= BRAND ================= */}
      <div>
        <a
          href="/"
          className="inline-flex items-center gap-3"
        >
          <img
            src="/khabartez.png"
            alt="Khabar Tez"
            className="h-14 w-auto object-contain"
          />

          <span className="text-[15px] font-bold leading-tight text-[#f5b400] sm:text-[18px]">
            Fast, Accurate
            <br />
            & Trusted
          </span>
        </a>

        <p className="mt-5 max-w-sm text-[15px] leading-7 text-gray-300">
          Fast, accurate and trusted news from India and around
          the world. Stay informed with the latest and most
          important stories.
        </p>

        <div className="mt-5 space-y-2 text-sm leading-6 text-gray-400">

          <p>
            Khabar Tez Media Private Limited,
            Sector 16A, Film City, Noida, UP 201301
          </p>

          <a
            href="tel:+911204567890"
            className="block transition-colors duration-200 hover:text-[#f5b400]"
          >
            +91 120 456 7890
          </a>

          <a
            href="mailto:editor@khabartej.com"
            className="block transition-colors duration-200 hover:text-[#f5b400]"
          >
            editor@khabartej.com
          </a>

        </div>
      </div>


      {/* ================= ABOUT ================= */}
      <div>

        <h3 className="mb-5 text-lg font-bold text-white">
          About Khabar Tez
        </h3>

        <ul className="space-y-3 text-[15px] text-gray-300">

          <li>
            <a
              href="/about"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              Contact Us
            </a>
          </li>

          <li>
            <a
              href="/career"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              Careers
            </a>
          </li>

          <li>
            <a
              href="/advertise"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              Advertise With Us
            </a>
          </li>

        </ul>

      </div>


      {/* ================= CATEGORIES ================= */}
      <div>

        <h3 className="mb-5 text-lg font-bold text-white">
          Categories
        </h3>

        <ul className="space-y-3 text-[15px] text-gray-300">

          <li>
            <a
              href="/category/national"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              India
            </a>
          </li>

          <li>
            <a
              href="/category/crime"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              Crime
            </a>
          </li>

          <li>
            <a
              href="/category/business"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              Business
            </a>
          </li>

          <li>
            <a
              href="/category/sports"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              Sports
            </a>
          </li>

          <li>
            <a
              href="/category/entertainment"
              className="transition-colors duration-200 hover:text-[#f5b400]"
            >
              Entertainment
            </a>
          </li>

        </ul>

      </div>


      {/* ================= SOCIAL ================= */}
      <div>

        <h3 className="mb-5 text-lg font-bold text-white">
          Follow Us
        </h3>


        {/* Social Icons */}
        <div className="flex flex-wrap gap-3">

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full
            bg-[#1b2636] text-sm font-bold text-white
            transition-all duration-200
            hover:-translate-y-1
            hover:bg-[#f5b400]
            hover:text-black"
          >
            f
          </a>


          {/* X */}
          <a
            href="#"
            aria-label="X"
            className="flex h-10 w-10 items-center justify-center rounded-full
            bg-[#1b2636] text-sm font-bold text-white
            transition-all duration-200
            hover:-translate-y-1
            hover:bg-[#f5b400]
            hover:text-black"
          >
            𝕏
          </a>


          {/* YouTube */}
          <a
            href="#"
            aria-label="YouTube"
            className="flex h-10 w-10 items-center justify-center rounded-full
            bg-[#1b2636] text-sm font-bold text-white
            transition-all duration-200
            hover:-translate-y-1
            hover:bg-[#f5b400]
            hover:text-black"
          >
            ▶
          </a>


          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full
            bg-[#1b2636] text-xs font-bold text-white
            transition-all duration-200
            hover:-translate-y-1
            hover:bg-[#f5b400]
            hover:text-black"
          >
            in
          </a>


          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full
            bg-[#1b2636] text-xs font-bold text-white
            transition-all duration-200
            hover:-translate-y-1
            hover:bg-[#f5b400]
            hover:text-black"
          >
            ig
          </a>

        </div>


        {/* Legal Links */}
        <div className="mt-7 space-y-3 text-[15px] text-gray-300">

          <a
            href="/privacy-policy"
            className="block transition-colors duration-200 hover:text-[#f5b400]"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="block transition-colors duration-200 hover:text-[#f5b400]"
          >
            Terms & Conditions
          </a>

        </div>

      </div>

    </div>

  </div>


  {/* ================= BOTTOM BAR ================= */}
  <div className="border-t border-white/10 bg-[#0b0b0b]">

    <div
      className="mx-auto flex max-w-[1400px] flex-col gap-3
      px-5 py-5 text-sm text-gray-500
      sm:flex-row sm:items-center
      sm:justify-between sm:px-8 lg:px-10"
    >

      <p>
        © 2026 Khabar Tez. All rights reserved.
      </p>

      <p>
        Designed & Developed by
        <a
          href="#"
          className="ml-1 text-gray-300 transition-colors duration-200 hover:text-[#f5b400]"
        >
          Khabar Tez Team
        </a>
      </p>

    </div>

  </div>

</footer>
  )
}
