import Image from 'next/image';
import ScrollFadeIn from './ScrollFadeIn';

const productTypes = [
  { icon: '/icons/Baguette-Icon-White.png', label: 'Baguettes' },
  { icon: '/icons/SCHNITZ-Work-Loaf-Icon-White.png', label: 'Loaves' },
  { icon: '/icons/SCHNITZ-Work-Boule-Icon-White.png', label: 'Boules' },
  { icon: '/icons/2-Foot-Sub.png', label: 'Sub Buns' },
  { icon: '/icons/Wheat-Bread.png', label: 'Sandwich Breads' },
];

export default function ProductsShowcase() {
  return (
    <section className="px-4 py-20 md:py-32">
      <ScrollFadeIn>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-widest text-white md:text-4xl">
            Pre-sliced To Serve Easy
          </h2>
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/photos/Sliced-Bread-At-45-Degrees.png"
                alt="Pre-sliced artisan bread"
                width={600}
                height={500}
                className="h-auto w-full"
              />
            </div>
            <div className="flex w-full flex-wrap items-start justify-center gap-8 md:w-1/2 md:gap-10">
              {productTypes.map((product) => (
                <div
                  key={product.label}
                  className="flex flex-col items-center gap-3"
                >
                  <Image
                    src={product.icon}
                    alt={product.label}
                    width={100}
                    height={100}
                    className="h-[80px] w-auto md:h-[100px]"
                  />
                  <span className="text-xs font-bold tracking-wider text-white/80 md:text-sm">
                    {product.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
