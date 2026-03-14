'use client';

import Image from 'next/image';
import ScrollFadeIn from './ScrollFadeIn';

const clients = [
  { file: 'client-01-9a3736_04773fc2.png', name: 'Reserve Wine & Food Bar' },
  { file: 'client-02-9a3736_4de60341.png', name: 'The Chop House' },
  { file: 'client-03-9a3736_6f10743b.png', name: 'Amore Trattoria' },
  { file: 'client-04-9a3736_7968b69a.png', name: 'Grove' },
  { file: 'client-05-9a3736_8d6eaaff.png', name: 'Brewery Vivant' },
  { file: 'client-06-9a3736_94f41580.png', name: 'The Electric Cheetah' },
  { file: 'client-07-9a3736_b2c2b1ac.png', name: "Marie Catrib's" },
  { file: 'client-08-9a3736_cb3d3be7.png', name: 'Terra GR' },
  { file: 'client-09-9a3736_cefc3adc.png', name: 'Donkey Taqueria' },
  { file: 'client-10-9a3736_cfc75189.png', name: 'Harmony Brewing' },
  { file: 'client-11-9a3736_db8095a6.png', name: 'The Mitten Brewing Co.' },
  { file: 'client-12-f813ef_4c5c681b.png', name: 'Osteria Rossa' },
  { file: 'client-13-f813ef_7edbf40d.png', name: "Bowdie's Chophouse" },
  { file: 'client-14-f813ef_934df8db.png', name: 'Matchbox Diner & Drinks' },
];

export default function ClientLogos() {
  return (
    <section className="px-4 py-20 md:py-32">
      <ScrollFadeIn>
        <h2 className="mb-16 text-center text-3xl tracking-widest text-white md:text-4xl">
          Enjoy Our Bread On These Menus
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((client) => (
            <div key={client.file} className="group relative">
              <Image
                src={`/clients/${client.file}`}
                alt={client.name}
                width={180}
                height={90}
                className="h-auto w-[140px] opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 md:w-[180px]"
              />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </ScrollFadeIn>
    </section>
  );
}
