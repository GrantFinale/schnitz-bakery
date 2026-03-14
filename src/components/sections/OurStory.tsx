import ScrollFadeIn from './ScrollFadeIn';

export default function OurStory() {
  return (
    <section className="px-4 py-20 md:py-32">
      <ScrollFadeIn>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-bold tracking-widest text-white md:text-4xl">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed text-[#E5E5E5] md:text-xl md:leading-relaxed">
            Schnitz Bakery is nestled on the north edge of Grand Rapids
            Michigan&apos;s East Town. We&apos;ve been a beloved fixture of the
            community for over 25 years, offering fresh artisan breads, with a
            bit of history in everything we bake. Our recipes date back to our
            earliest days, and we take pride in using the finest local
            ingredients and time-honored techniques to deliver baked goods that
            complement any menu.
          </p>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
