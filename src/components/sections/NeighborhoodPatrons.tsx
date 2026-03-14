import Image from 'next/image';
import ScrollFadeIn from './ScrollFadeIn';

export default function NeighborhoodPatrons() {
  return (
    <section className="px-4 py-20 md:py-32">
      <ScrollFadeIn>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-bold tracking-widest text-white md:text-4xl">
            To Our Neighborhood Patrons
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-[#E5E5E5] md:text-xl md:leading-relaxed">
            Even though you may not find us in our usual spot, and we no longer
            have a retail shop, you can still enjoy the bread you know and love.
            We&apos;re continuing to bake fresh and make our bread available for
            purchase directly from West Michigan Farm Link, the online
            marketplace where local people can purchase local food.
          </p>
          <a
            href="https://www.westmichiganfarmlink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <Image
              src="/logos/WM-Farm-Link.png"
              alt="West Michigan Farm Link"
              width={465}
              height={120}
              className="mx-auto h-auto w-full max-w-[465px]"
            />
          </a>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
