
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsStories } from "../../Data/news";
export const instant = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const story = newsStories.find((item) => item.slug === slug);

  if (!story) {
    return { title: "News Not Found | Khabar Tez" };
  }

  return {
    title: `${story.title} | Khabar Tez`,
    description: story.description,
  };
}

export default async function NewsDetailsPage({ params }) {
  const { slug } = await params;

  const story = newsStories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const relatedNews = newsStories
    .filter(
      (item) =>
        item.category === story.category && item.slug !== story.slug
    )
    .concat(
      newsStories.filter(
        (item) =>
          item.category !== story.category && item.slug !== story.slug
      )
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-[1200px]">

        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>

          <span>/</span>

          <span className="text-gray-700">{story.category}</span>

          <span>/</span>

          <span className="max-w-[200px] truncate text-red-600">
            News
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">

          {/* Main Article */}
          <article className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 sm:p-7 lg:p-9">

            {/* Category */}
            <span
              className={`inline-flex rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${story.categoryColor}`}
            >
              {story.category}
            </span>

            {/* Headline */}
            <h1 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-3xl lg:text-4xl">
              {story.title}
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
              {story.description}
            </p>

            {/* Author and Date */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-gray-100 py-4 text-sm">

              <span className="font-bold text-gray-900">
                By {story.author}
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />

              <time className="text-gray-500">
                {story.date}
              </time>

            </div>

            {/* Featured Image */}
            <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={story.image}
                alt={story.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="mt-8">

              <h2 className="mb-5 border-l-4 border-red-600 pl-3 text-xl font-extrabold text-gray-950">
                Full Story
              </h2>

              <div className="space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
                {story.content.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>

            {/* Back to Home */}
            <div className="mt-10 border-t border-gray-100 pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                ← Back to Home
              </Link>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">

            {/* Advertisement */}
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-4">

              <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
                Advertisement
              </p>

              <div className="flex min-h-[250px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-red-950 to-red-600 p-5 text-center text-white">

                <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Khabar Tez
                </span>

                <h3 className="mt-3 text-2xl font-black">
                  Advertise With Us
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Connect your brand with our readers.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-red-700"
                >
                  Contact Us
                </Link>

              </div>
            </div>

            {/* Related News */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

              <div className="border-b border-gray-100 px-5 py-4">
                <h2 className="text-lg font-extrabold text-gray-950">
                  Related News
                </h2>
              </div>

              <div className="divide-y divide-gray-100 px-4">

                {relatedNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="group flex gap-3 py-4"
                  >

                    <div className="relative h-[75px] w-[90px] shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="90px"
                        className="object-cover transition duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase text-red-600">
                        {item.category}
                      </span>

                      <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-5 text-gray-800 transition group-hover:text-red-600">
                        {item.title}
                      </h3>
                    </div>

                  </Link>
                ))}

              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}
