'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

const organizationTypes = [
  'Restaurant',
  'Cafe/Coffee Shop',
  'Deli/Market',
  'Apartment Community',
  'Senior Living',
  'Church/Community Center',
  'Corporate Campus',
  'School',
  'Other',
];

const deliveryFrequencies = [
  'Daily',
  '3x per week',
  '2x per week',
  'Weekly',
  'Other',
];

export default function GetOurBreadPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formState === 'loading') return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Client-side validation
    const contactName = formData.get('contactName') as string;
    const email = formData.get('email') as string;

    if (!contactName?.trim()) {
      setErrorMessage('Contact Name is required.');
      setFormState('error');
      return;
    }

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('A valid email address is required.');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');

    try {
      const body = Object.fromEntries(formData.entries());
      const res = await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setFormState('success');
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setFormState('error');
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-widest text-white sm:text-5xl md:text-6xl">
            Bring Fresh Schnitz Bread to Your Community or Business
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#E5E5E5] sm:text-xl">
            Partner with Schnitz Bakery for regular fresh bread delivery. We bring artisan-quality
            loaves right to your door — baked fresh and delivered across West Michigan.
          </p>
        </div>
      </section>

      {/* Customer Types Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-widest text-white sm:text-4xl">
            Fresh Daily Baked Bread, Daily.
          </h2>

          <ul className="mx-auto max-w-xl space-y-4 text-lg text-[#E5E5E5]">
            {[
              'Apartment and condo communities',
              'Senior living facilities',
              'Churches and community centers',
              'Cafes, delis, and markets',
              'Corporate campuses or schools',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-[#ED1C24]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-lg border border-white/10 bg-black/60 px-6 py-8 text-center sm:px-10">
            <p className="text-lg font-semibold tracking-wider text-[#B99867]">
              Minimum Order
            </p>
            <p className="mt-2 text-3xl font-bold tracking-widest text-white">
              10+ Loaves Per Delivery
            </p>
            <p className="mt-1 text-sm text-[#E5E5E5]">($40 minimum)</p>
          </div>
        </div>
      </section>

      {/* Delivery Van */}
      <section className="flex justify-center px-4 py-12">
        <Image
          src="/photos/DELIVERY-VAN.png"
          alt="Schnitz Bakery delivery van"
          width={600}
          height={400}
          className="h-auto w-full max-w-lg"
        />
      </section>

      {/* Form Section */}
      <section className="bg-[#E5E5E5] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-2xl font-bold tracking-widest text-black sm:text-3xl">
            READY TO GET YOUR COMMERCIAL ACCOUNT STARTED?
          </h2>
          <p className="mb-10 text-center text-base leading-relaxed text-black/70">
            Fill out the form below and we&apos;ll contact you to confirm delivery details and
            pricing for your location.
          </p>

          {formState === 'success' ? (
            <div className="rounded-lg border border-green-600/30 bg-green-900/40 px-6 py-10 text-center">
              <p className="text-xl font-bold text-green-300">Thank you!</p>
              <p className="mt-2 text-green-200">
                We&apos;ll be in touch within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="organizationName" className="mb-1 block text-sm font-semibold text-black">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="contactName" className="mb-1 block text-sm font-semibold text-black">
                  Contact Name <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-black">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-black">
                  Email <span className="text-[#ED1C24]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="deliveryAddress" className="mb-1 block text-sm font-semibold text-black">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  placeholder="Street address, city, state, zip"
                />
              </div>

              <div>
                <label htmlFor="organizationType" className="mb-1 block text-sm font-semibold text-black">
                  Type of Organization
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  {organizationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="loavesPerOrder" className="mb-1 block text-sm font-semibold text-black">
                  Number of Loaves per Order
                </label>
                <input
                  type="text"
                  id="loavesPerOrder"
                  name="loavesPerOrder"
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  placeholder="e.g. 20"
                />
              </div>

              <div>
                <label htmlFor="deliveryFrequency" className="mb-1 block text-sm font-semibold text-black">
                  Delivery Frequency
                </label>
                <select
                  id="deliveryFrequency"
                  name="deliveryFrequency"
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  {deliveryFrequencies.map((freq) => (
                    <option key={freq} value={freq}>
                      {freq}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="mb-1 block text-sm font-semibold text-black">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full rounded border border-black/20 bg-black px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ED1C24]"
                  placeholder="Anything else we should know?"
                />
              </div>

              {formState === 'error' && (
                <div className="rounded border border-red-600/30 bg-red-900/40 px-4 py-3 text-sm text-red-300">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full rounded bg-black px-6 py-4 text-sm font-bold tracking-widest text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {formState === 'loading' ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
