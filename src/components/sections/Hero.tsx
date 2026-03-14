import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4">
      <div className="animate-fade-in-up mx-auto w-full max-w-5xl">
        <Image
          src="/photos/hero-bread-pile.png"
          alt="Schnitz Bakery artisan bread assortment"
          width={2500}
          height={1037}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
      <h1 className="animate-fade-in-up mt-8 text-center font-serif text-5xl font-bold tracking-wide text-white md:text-7xl [animation-delay:200ms]">
        Schnitz Bakes So Kitchens Cook
      </h1>
    </section>
  );
}
