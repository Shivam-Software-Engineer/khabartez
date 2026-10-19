
const latestStories = [
  {
    id: 1,
    category: "National",
    categoryColor: "bg-red-50 text-red-700",
    title:
      "India's Infrastructure Push: Major Projects Set to Transform Connectivity",
    description:
      "A closer look at the infrastructure developments shaping transport, cities and connectivity across the country.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    date: "2 hours ago",
    author: "News Desk",
  },
  {
    id: 2,
    category: "Business",
    categoryColor: "bg-emerald-50 text-emerald-700",
    title: "Markets, Startups and the Economy: What Investors Are Watching",
    description:
      "Explore the latest business trends, market movements and developments in India's growing economy.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
    date: "3 hours ago",
    author: "Business Desk",
  },
  {
    id: 3,
    category: "Technology",
    categoryColor: "bg-blue-50 text-blue-700",
    title: "The Technology Trends Changing How India Works and Connects",
    description:
      "From digital services to emerging innovations, technology continues to reshape everyday life.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    date: "4 hours ago",
    author: "Tech Desk",
  },
  {
    id: 4,
    category: "Sports",
    categoryColor: "bg-orange-50 text-orange-700",
    title: "A Look at the Sporting Stories and Matchups Making Headlines",
    description:
      "Catch up on major sporting events, standout performances and the fixtures fans are following.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
    date: "5 hours ago",
    author: "Sports Desk",
  },
  {
    id: 5,
    category: "World",
    categoryColor: "bg-purple-50 text-purple-700",
    title: "Global Developments to Watch and Why They Matter to India",
    description:
      "A roundup of international developments across diplomacy, society and the global economy.",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=85",
    date: "6 hours ago",
    author: "World Desk",
  },
];

const trendingStories = [
  {
    id: 1,
    category: "National",
    title: "The biggest national stories you need to know today",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 2,
    category: "Business",
    title: "Key market developments attracting investor attention",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 3,
    category: "Sports",
    title: "The sporting moments everyone is talking about",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=240&q=80",
  },
  {
    id: 4,
    category: "Technology",
    title: "New technology trends worth keeping an eye on",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=240&q=80",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1320px]">

        {/* Section Heading */}
        <div className="mb-7 flex items-end justify-between gap-4 border-b border-gray-200 pb-4 sm:mb-8">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-6 w-1 rounded-full bg-red-600" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-600 sm:text-sm">
                Stay Informed
              </span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl lg:text-4xl">
              Latest <span className="text-red-600">News</span>
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
              The latest updates, important stories and developments.
            </p>
          </div>

          <a
            href="/latest-news"
            className="mb-1 hidden shrink-0 items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white sm:inline-flex"
          >
            View All <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Main Content + Sidebar */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">

          {/* Latest News Feed */}
          <div className="min-w-0">

            {/* Feed label */}
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                Recent Updates
              </h3>

              <span className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Latest stories
              </span>
            </div>

            <div className="divide-y divide-gray-100">
              {latestStories.map((story) => (
                <article
                  key={story.id}
                  className="group flex flex-col gap-4 py-5 first:pt-0 sm:flex-row sm:gap-5"
                >
                  {/* Story Image */}
                  <a
                    href={`/news/${story.id}`}
                    aria-label={`Read: ${story.title}`}
                    className="relative block aspect-[16/9] w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:aspect-[4/3] sm:w-[220px] md:w-[250px]"
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </a>

                  {/* Story Content */}
                  <div className="flex min-w-0 flex-1 flex-col items-start">
                    <span
                      className={`inline-flex rounded-md px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider sm:text-xs ${story.categoryColor}`}
                    >
                      {story.category}
                    </span>

                    <h4 className="mt-2.5 text-lg font-extrabold leading-snug text-gray-950 transition-colors group-hover:text-red-700 sm:text-xl">
                      <a href={`/news/${story.id}`}>
                        {story.title}
                      </a>
                    </h4>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                      {story.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 text-xs text-gray-400">
                      <span className="font-semibold text-gray-600">
                        {story.author}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-300" />

                      <time>{story.date}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View More */}
            <a
              href="/latest-news"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm font-bold text-gray-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              Explore All News
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Sidebar */}
          <aside className="flex min-w-0 flex-col gap-6">

            {/* Trending Stories */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <h3 className="flex items-center gap-2 text-lg font-extrabold text-gray-950">
                  <span className="text-red-600">↗</span>
                  Trending Now
                </h3>

                <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-red-600">
                  Popular
                </span>
              </div>

              <div className="divide-y divide-gray-100 px-4">
                {trendingStories.map((story, index) => (
                  <a
                    key={story.id}
                    href={`/news/${story.id}`}
                    className="group flex items-center gap-3 py-4"
                  >
                    <span className="w-5 shrink-0 text-xl font-black text-gray-200 transition-colors group-hover:text-red-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="h-[68px] w-[76px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={story.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                        {story.category}
                      </span>

                      <h4 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-gray-800 transition-colors group-hover:text-red-700">
                        {story.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Advertisement Placeholder */}
            <div className="overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Advertisement
                </span>
                <span className="text-xs text-gray-400">Ad</span>
              </div>

              <a
                href="/contact"
                className="flex min-h-[230px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-red-950 via-red-800 to-red-600 px-5 py-7 text-center text-white transition hover:shadow-lg sm:min-h-[260px]"
              >
                <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  Advertise With Us
                </span>

                <h4 className="mt-5 text-2xl font-black leading-tight">
                  Your Brand.
                  <br />
                  Our Audience.
                </h4>

                <p className="mt-3 max-w-[230px] text-sm leading-6 text-white/80">
                  Connect your business with readers on Khabar Tez.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-red-700 transition group-hover:bg-gray-100">
                  Contact Us <span aria-hidden="true">→</span>
                </span>
              </a>
            </div>

            {/* Newsletter / Brand Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                Khabar Tez
              </span>

              <h3 className="mt-2 text-xl font-extrabold leading-snug text-gray-950">
                Stay Ahead of the News.
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Explore the stories that matter, all in one place.
              </p>

              <a
                href="/categories"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition hover:text-red-800"
              >
                Browse Categories <span aria-hidden="true">→</span>
              </a>
            </div>

          </aside>
        </div>

        {/* Mobile View All */}
        <a
          href="/latest-news"
          className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-800 transition hover:border-red-600 hover:text-red-600 sm:hidden"
        >
          View All Latest News <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
