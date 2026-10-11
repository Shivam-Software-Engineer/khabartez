import React from 'react'

export default function HeroSection() {

    const featuredNews = {
    category: "India",
    title:
      "India's growth story continues with new opportunities and major developments",
    description:
      "Stay updated with the latest developments, important announcements and stories shaping India today.",
    time: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85",
  };

  const sideNews = [
    {
      category: "Business",
      title: "Stock market sees positive trend as investors remain optimistic",
      time: "1 hour ago",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=85",
    },
    {
      category: "Sports",
      title: "India's sporting stars deliver an exciting performance",
      time: "3 hours ago",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=85",
    },
    {
      category: "Politics",
      title: "Major political developments take centre stage today",
      time: "4 hours ago",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=85",
    },
  ];


  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between border-b border-gray-200 pb-3 sm:mb-6">
          <div className="flex items-center gap-3">
            <span className="h-7 w-1 rounded-full bg-[#d00000] sm:h-8" />

            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Top Stories
            </h2>
          </div>

          <button
            type="button"
            className="
              group flex items-center gap-1
              text-sm font-bold text-[#d00000]
              transition-colors duration-200
              hover:text-red-800
              sm:text-base
            "
          >
            View All
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.65fr_1fr]">

          {/* ========================================
              FEATURED NEWS
          ======================================== */}
          <article
            className="
              group relative min-h-[390px]
              overflow-hidden rounded-xl
              bg-gray-900 shadow-md
              sm:min-h-[460px]
              lg:min-h-[500px]
            "
          >
            {/* Image */}
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="
                absolute inset-0
                h-full w-full
                object-cover
                transition-transform duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black via-black/55
                to-black/5
              "
            />

            {/* Top Category */}
            <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
              <span
                className="
                  inline-flex items-center
                  rounded-md bg-[#d00000]
                  px-3 py-1.5
                  text-xs font-bold uppercase
                  tracking-wide text-white
                  shadow-lg
                "
              >
                {featuredNews.category}
              </span>
            </div>

            {/* Featured Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 lg:p-8">

              {/* Breaking indicator */}
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">
                  Featured Story
                </span>
              </div>

              <h1
                className="
                  max-w-3xl
                  text-2xl font-extrabold
                  leading-tight text-white
                  sm:text-3xl
                  lg:text-4xl
                  xl:text-[42px]
                "
              >
                {featuredNews.title}
              </h1>

              <p
                className="
                  mt-3 max-w-2xl
                  text-sm leading-6 text-gray-200
                  sm:text-base
                "
              >
                {featuredNews.description}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center gap-3 text-xs text-gray-300 sm:text-sm">
                <span>{featuredNews.time}</span>

                <span className="h-1 w-1 rounded-full bg-gray-400" />

                <span>Read More</span>

                <span className="text-base">→</span>
              </div>
            </div>
          </article>

          {/* ========================================
              SIDE NEWS
          ======================================== */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">

            {sideNews.map((news, index) => (
              <article
                key={index}
                className="
                  group flex
                  min-h-[125px]
                  overflow-hidden
                  rounded-xl
                  border border-gray-200
                  bg-white
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-gray-300
                  hover:shadow-lg
                "
              >
                {/* Image */}
                <div className="relative w-[38%] shrink-0 overflow-hidden sm:w-[42%] lg:w-[40%]">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="
                      h-full w-full
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/0" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-3 sm:p-4">

                  <span className="mb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#d00000] sm:text-xs">
                    {news.category}
                  </span>

                  <h3
                    className="
                      line-clamp-3
                      text-sm font-bold
                      leading-5 text-gray-900
                      transition-colors
                      group-hover:text-[#d00000]
                      sm:text-[15px]
                    "
                  >
                    {news.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-500 sm:text-xs">
                    <span>{news.time}</span>

                    <span className="h-1 w-1 rounded-full bg-gray-300" />

                    <span>News</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Highlights */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Latest
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              120+ Stories
            </p>
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Updates
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              Every Hour
            </p>
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Coverage
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              All India
            </p>
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-3 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Trusted
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              Fast & Accurate
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
