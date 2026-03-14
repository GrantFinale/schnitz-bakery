import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-0">
      <div className="animate-fade-in-up w-full">
        <Image
          src="/photos/hero-bread-pile.png"
          alt="Schnitz Bakery artisan bread assortment"
          width={2500}
          height={1037}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
      <div className="animate-fade-in-up -mt-16 md:-mt-24 relative z-10">
        <Image
          src="/logos/SCHNITZ-LOGO-TYPE-WHITE.png"
          alt="Schnitz Bakery"
          width={300}
          height={90}
          className="h-20 w-auto md:h-28"
        />
      </div>
      <h1 className="animate-fade-in-up mt-6 text-center text-3xl tracking-wide text-white md:text-5xl [animation-delay:200ms]">
        Schnitz Bakes So Kitchens Cook
      </h1>
    </section>
  );
}
