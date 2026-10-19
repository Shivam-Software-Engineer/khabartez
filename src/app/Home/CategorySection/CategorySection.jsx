
const categories = [
  {
    name: "India",
    subtitle: "Top stories from across the nation",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80",
    slug: "india",
    color: "from-red-950/90",
  },
  {
    name: "States",
    subtitle: "The latest news from your state",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=700&q=80",
    slug: "states",
    color: "from-orange-950/90",
  },
  {
    name: "Politics",
    subtitle: "Political updates and developments",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=700&q=80",
    slug: "politics",
    color: "from-blue-950/90",
  },
  {
    name: "Business",
    subtitle: "Markets, finance and the economy",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80",
    slug: "business",
    color: "from-emerald-950/90",
  },
  {
    name: "Crime",
    subtitle: "Crime reports and investigations",
    image:
      "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&w=700&q=80",
    slug: "crime",
    color: "from-slate-950/90",
  },
  {
    name: "Sports",
    subtitle: "Scores, matches and sports updates",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80",
    slug: "sports",
    color: "from-green-950/90",
  },
  {
    name: "Entertainment",
    subtitle: "Movies, celebrities and television",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80",
    slug: "entertainment",
    color: "from-purple-950/90",
  },
  {
    name: "Technology",
    subtitle: "Tech trends, gadgets and innovation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
    slug: "technology",
    color: "from-cyan-950/90",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-gray-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1320px]">

        {/* Section Heading */}
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-6 w-1 rounded-full bg-red-600" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-600 sm:text-sm">
                Explore News
              </span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl lg:text-4xl">
              Explore{" "}
              <span className="text-red-600">Categories</span>
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover the latest stories from India, politics, business,
              sports and more — all in one place.
            </p>
          </div>

          <a
            href="/categories"
            className="mb-1 hidden shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-gray-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white sm:inline-flex"
          >
            View All
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group relative isolate min-h-[170px] overflow-hidden rounded-2xl bg-gray-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[220px] sm:rounded-3xl lg:min-h-[250px]"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient */}
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-t ${category.color} via-black/25 to-black/5`}
              />

              {/* Category Label */}
              <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                <span className="rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md sm:px-3 sm:text-xs">
                  {category.name}
                </span>
              </div>

              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                <h3 className="text-lg font-extrabold text-white drop-shadow sm:text-2xl">
                  {category.name}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/80 sm:text-sm">
                  {category.subtitle}
                </p>

                <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2.5 sm:mt-4 sm:pt-3">
                  <span className="text-[10px] font-semibold text-white/75 sm:text-xs">
                    Explore Stories
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm text-red-600 transition duration-300 group-hover:bg-red-600 group-hover:text-white sm:h-9 sm:w-9 sm:text-base">
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All */}
        <a
          href="/categories"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 transition hover:border-red-600 hover:text-red-600 sm:hidden"
        >
          View All Categories
          <span aria-hidden="true">→</span>
        </a>

      </div>
    </section>
  );
}
