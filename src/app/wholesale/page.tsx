import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wholesale Ordering | Schnitz Bakery',
  description:
    'Place your wholesale bread order with Schnitz Bakery. Fresh artisan bread delivered daily across West Michigan.',
};

export default function WholesalePage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-widest text-white sm:text-5xl md:text-6xl">
          Place My Order
        </h1>
        <p className="mt-4 text-xl tracking-wider text-[#B99867] sm:text-2xl">
          We&apos;ll Deliver Tomorrow.
        </p>

        <a
          href="https://shop.schnitzbakery.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded bg-[#ED1C24] px-10 py-4 text-lg font-bold tracking-widest text-white transition-colors hover:bg-[#d4181f]"
        >
          ORDER ONLINE
        </a>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-base leading-relaxed text-[#E5E5E5]">
            Already a wholesale partner? Log in to your account to place orders.
          </p>
          <Link
            href="/get-our-bread"
            className="mt-6 inline-block rounded border border-white/20 px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            BECOME A PARTNER
          </Link>
        </div>
      </div>
    </div>
  );
}
