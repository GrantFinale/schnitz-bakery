import Image from 'next/image';
import ScrollFadeIn from './ScrollFadeIn';

const serviceCategories = [
  { icon: '/icons/Fine-Dining.png', label: 'Fine Dining' },
  { icon: '/icons/Casual-Dining.png', label: 'Family Dining' },
  { icon: '/icons/Coffee-Shops.png', label: 'Coffee Shops' },
  { icon: '/icons/Deli.png', label: "Deli's" },
  { icon: '/icons/Brew-Pubs.png', label: 'Brew Pubs' },
  { icon: '/icons/Wine-Bars.png', label: 'Wine Bars' },
  { icon: '/icons/Food-Trucks.png', label: 'Food Trucks' },
];

export default function Delivery() {
  return (
    <section className="px-4 py-20 md:py-32">
      <ScrollFadeIn>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-widest text-white md:text-4xl">
            We Rise Early To Deliver Daily
          </h2>
          <div className="mx-auto mb-16 max-w-2xl">
            <Image
              src="/photos/DELIVERY-VAN.png"
              alt="Schnitz Bakery delivery van"
              width={700}
              height={300}
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12">
            {serviceCategories.map((cat) => (
              <div
                key={cat.label}
                className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={cat.icon}
                  alt={cat.label}
                  width={70}
                  height={70}
                  className="h-[60px] w-auto transition-transform duration-300 group-hover:scale-110 md:h-[70px]"
                />
                <span className="text-xs font-bold tracking-wider text-white/80 md:text-sm">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
