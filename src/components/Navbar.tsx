'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'OUR STORY', href: '/' },
  { label: 'GET OUR BREAD', href: '/get-our-bread' },
  { label: 'ALL PRODUCTS', href: 'https://shop.schnitzbakery.com', external: true },
  { label: 'FAVORITES', href: '/favorites' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/SCHNITZ-LOGO-TYPE-WHITE.png"
              alt="Schnitz Bakery"
              width={160}
              height={48}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm tracking-widest text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm tracking-widest text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Log In Link */}
            <Link
              href="/login"
              className="ml-2 font-mono text-sm tracking-widest text-white/80 transition-colors hover:text-white"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 top-20 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div className="absolute right-0 top-0 bottom-0 w-72 bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col gap-1 px-6 pt-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/10 py-4 font-mono text-sm tracking-widest text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/10 py-4 font-mono text-sm tracking-widest text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-6 py-4 font-mono text-sm tracking-widest text-white/80 transition-colors hover:text-white"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
