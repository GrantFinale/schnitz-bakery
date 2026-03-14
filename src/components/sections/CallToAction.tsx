import ScrollFadeIn from './ScrollFadeIn';

export default function CallToAction() {
  return (
    <section className="px-4 py-20 md:py-32">
      <ScrollFadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-widest text-white md:text-5xl">
            Ready to Order?
          </h2>
          <p className="mb-10 text-lg text-[#E5E5E5]">
            Whether you&apos;re a restaurant, caf&eacute;, or food service
            provider, we&apos;d love to put our bread on your menu.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="https://shop.schnitzbakery.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-[#ED1C24] px-8 py-4 text-sm font-bold tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-[#d4181f] hover:shadow-lg hover:shadow-red-900/30"
            >
              ORDER ONLINE
            </a>
            <a
              href="/get-our-bread"
              className="inline-block rounded border-2 border-[#ED1C24] px-8 py-4 text-sm font-bold tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-[#ED1C24] hover:shadow-lg hover:shadow-red-900/30"
            >
              BECOME A WHOLESALE PARTNER
            </a>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
