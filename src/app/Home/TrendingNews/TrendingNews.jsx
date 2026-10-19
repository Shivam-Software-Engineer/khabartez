
const trendingStories = [
  {
    id: 1,
    category: "National",
    title: "Major National Developments You Need to Know Today",
    time: "15 minutes ago",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=85",
    reads: "12.5K",
  },
  {
    id: 2,
    category: "Business",
    title: "Business and Market Updates: Key Developments to Watch",
    time: "32 minutes ago",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=85",
    reads: "9.8K",
  },
  {
    id: 3,
    category: "Technology",
    title: "The Latest Technology Trends Shaping Our Future",
    time: "48 minutes ago",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85",
    reads: "8.2K",
  },
  {
    id: 4,
    category: "Sports",
    title: "Sports Highlights and the Latest Updates from the Field",
    time: "1 hour ago",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=85",
    reads: "6.7K",
  },
  {
    id: 5,
    category: "World",
    title: "Important Global Events and International Headlines",
    time: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=700&q=85",
    reads: "5.4K",
  },
];

const trendingTopics = [
  "India News",
  "Latest Technology",
  "Business Updates",
  "Sports News",
  "Entertainment",
  "World News",
];

export default function TrendingNews() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-6 w-1 rounded-full bg-red-600" />

              <span className="text-sm font-bold uppercase tracking-[0.16em] text-red-600">
                Popular Right Now
              </span>
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
              Trending News
            </h2>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Stories everyone is talking about.
            </p>
          </div>

          <a
            href="/trending"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
          >
            Explore Trending
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Trending Stories */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {trendingStories.map((story, index) => (
              <article
                key={story.id}
                className={`group flex gap-3 p-4 transition hover:bg-red-50/40 sm:gap-5 sm:p-5 ${
                  index !== trendingStories.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                {/* Ranking Number */}
                <div className="flex w-8 shrink-0 items-start justify-center pt-1 sm:w-10">
                  <span
                    className={`text-2xl font-black sm:text-3xl ${
                      index === 0
                        ? "text-red-600"
                        : "text-gray-300 group-hover:text-red-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Story Image */}
                <a
                  href={`/news/${story.id}`}
                  aria-label={story.title}
                  className="h-24 w-28 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-28 sm:w-40"
                >
                  <img
                    src={story.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </a>

                {/* Story Details */}
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded bg-red-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-red-700 sm:text-xs">
                    {story.category}
                  </span>

                  <a href={`/news/${story.id}`}>
                    <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-5 text-gray-900 transition group-hover:text-red-700 sm:text-base sm:leading-6">
                      {story.title}
                    </h3>
                  </a>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500 sm:text-xs">
                    <span>{story.time}</span>

                    <span className="inline-flex items-center gap-1">
                      <span aria-hidden="true">◉</span>
                      {story.reads} reads
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Trending Topics */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-5 w-1 rounded-full bg-red-600" />

                <h3 className="text-lg font-extrabold text-gray-900">
                  Trending Topics
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic, index) => (
                  <a
                    key={topic}
                    href={`/search?q=${encodeURIComponent(topic)}`}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                      index === 0
                        ? "border-red-600 bg-red-600 text-white hover:bg-red-700"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                    }`}
                  >
                    {topic}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter / Promotion */}
            <div className="relative overflow-hidden rounded-2xl bg-red-700 p-6 text-white">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
              <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-black/10" />

              <div className="relative">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Stay Informed
                </span>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight">
                  News That Matters. Updates That Count.
                </h3>

                <p className="mt-3 text-sm leading-6 text-red-100">
                  Stay connected with the stories shaping your world.
                </p>

                <a
                  href="/latest-news"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-red-700 transition hover:bg-red-50"
                >
                  Read Latest News
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="mb-4 text-base font-extrabold text-gray-900">
                Explore More
              </h3>

              <div className="space-y-3">
                <a
                  href="/categories"
                  className="flex items-center justify-between text-sm font-medium text-gray-600 transition hover:text-red-600"
                >
                  All Categories
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="/videos"
                  className="flex items-center justify-between text-sm font-medium text-gray-600 transition hover:text-red-600"
                >
                  Watch Videos
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="/contact"
                  className="flex items-center justify-between text-sm font-medium text-gray-600 transition hover:text-red-600"
                >
                  Contact the News Desk
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
