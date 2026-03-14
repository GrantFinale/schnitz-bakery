import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black/90 pt-16 pb-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Knead Us Section */}
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-widest text-white sm:text-4xl">
            KNEAD US?
          </h2>

          <div className="mb-10 space-y-2 text-sm leading-relaxed text-[#E5E5E5] sm:text-base">
            <p>147 Lakeside DR, Suite 150</p>
            <p>Grand Rapids, Michigan 49503</p>
            <p className="pt-2">
              <a
                href="tel:6169882316"
                className="transition-colors hover:text-white"
              >
                616 988 2316
              </a>
            </p>
            <p>
              <a
                href="mailto:schnitzbakery@gmail.com?subject=Let's Talk About Bread"
                className="transition-colors hover:text-white"
              >
                schnitzbakery@gmail.com
              </a>
            </p>
            <p className="pt-2 font-semibold tracking-wider text-[#B99867]">
              Daily Deliveries M-F
            </p>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link href="/">
            <Image
              src="/logos/SCHNITZ-LOGO-TYPE-WHITE.png"
              alt="Schnitz Bakery"
              width={200}
              height={60}
              className="h-14 w-auto opacity-80 transition-opacity hover:opacity-100 sm:h-16"
            />
          </Link>
        </div>

        {/* Google Reviews Badge */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logos/GOOGLE-REVIEWS.png"
            alt="Google Reviews"
            width={160}
            height={48}
            className="h-12 w-auto"
          />
        </div>

        {/* Social Links */}
        <div className="mb-10 flex justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61571528166130"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="Facebook"
          >
            <Image
              src="/logos/facebook-icon.png"
              alt="Facebook"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-white/10" />

        {/* Copyright */}
        <p className="text-center text-xs tracking-wider text-white/40">
          &copy;2026 by Schnitz Bakery. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
