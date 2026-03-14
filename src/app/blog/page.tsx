import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Bread Board | Schnitz Bakery',
  description:
    'Stories, recipes, and news from the Schnitz Bakery kitchen in Grand Rapids, Michigan.',
};

export default function BlogPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-widest text-white sm:text-5xl md:text-6xl">
          The Bread Board
        </h1>
        <p className="mt-4 text-lg text-[#E5E5E5] sm:text-xl">
          Stories, recipes, and news from the Schnitz Bakery kitchen
        </p>

        <div className="mx-auto mt-16 max-w-md rounded-lg border border-white/10 bg-black/60 px-8 py-12">
          <div className="mb-4 text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-[#B99867]"
            >
              <path d="M12 20h9" />
              <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
            </svg>
          </div>
          <p className="text-xl font-bold tracking-wider text-white">
            Coming Soon
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#E5E5E5]">
            We&apos;re kneading some great content for you. Check back soon for
            stories from the bakery, recipes, and the latest news.
          </p>
        </div>
      </div>
    </div>
  );
}
